// script.js
document.addEventListener("DOMContentLoaded", () => {
  const currentDate = new Date().toLocaleDateString();
  document.getElementById("current-date").textContent = `Date: ${currentDate}`;
});

function mergeForms() {
  const fileInput = document.getElementById("excelFile");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select an Excel file");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);

      if (jsonData.length === 0) {
        alert("No data found in Excel file");
        return;
      }

      // Check if required columns exist
      const requiredColumns = ["File_No", "Full_Name", "Share_No"];
      const firstRow = jsonData[0];
      const missingColumns = requiredColumns.filter(
        (col) => !(col in firstRow)
      );

      if (missingColumns.length > 0) {
        alert(`Missing required columns: ${missingColumns.join(", ")}`);
        return;
      }

      generateForms(jsonData);
    } catch (error) {
      alert("Error processing Excel file: " + error.message);
    }
  };
  reader.readAsArrayBuffer(file);
}

function generateForms(data) {
  const container = document.getElementById("pagesContainer");
  const template = document.getElementById("formTemplate");

  // Clear previous forms
  container.innerHTML = "";

  // Generate forms for each row
  data.forEach((row) => {
    // Create a new page for each record
    const page = document.createElement("div");
    page.className = "a4-page";
    const gridContainer = document.createElement("div");
    gridContainer.className = "grid-container";
    page.appendChild(gridContainer);

    // Generate 4 copies of the same form
    for (let i = 0; i < 4; i++) {
      const formClone = template.content.cloneNode(true);

      // Fill in all merge fields
      const mergeFields = formClone.querySelectorAll(".merge-field");
      mergeFields.forEach((field) => {
        const fieldName = field.dataset.field;
        if (fieldName in row) {
          field.textContent = row[fieldName];
        }
      });

      gridContainer.appendChild(formClone);
    }

    container.appendChild(page);
  });
}

async function exportAsPDF() {
  const element = document.getElementById("pagesContainer");

  // Show loading indicator
  const loadingIndicator = document.createElement("div");
  loadingIndicator.innerText = "Generating PDF...";
  loadingIndicator.style.position = "fixed";
  loadingIndicator.style.top = "50%";
  loadingIndicator.style.left = "50%";
  loadingIndicator.style.transform = "translate(-50%, -50%)";
  loadingIndicator.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  loadingIndicator.style.padding = "20px";
  loadingIndicator.style.borderRadius = "5px";
  loadingIndicator.style.zIndex = "1000";
  document.body.appendChild(loadingIndicator);

  try {
    // Create PDF
    const pdf = new jsPDF("p", "mm", "a4");
    const pages = element.getElementsByClassName("a4-page");
    const canvasPromises = [];

    for (let i = 0; i < pages.length; i++) {
      // Create a promise for each page
      canvasPromises.push(
        html2canvas(pages[i], {
          scale: 2,
          useCORS: true,
          logging: false,
        }).then((canvas) => {
          const imgData = canvas.toDataURL("image/jpeg", 1.0);
          if (i > 0) {
            pdf.addPage();
          }
          pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
        })
      );
    }

    // Wait for all canvas rendering to complete
    await Promise.all(canvasPromises);

    // Save the PDF
    pdf.save("merged_forms.pdf");
  } catch (error) {
    console.error("PDF Export Error:", error);
    alert("Error generating PDF. Please try again.");
  } finally {
    // Remove loading indicator
    document.body.removeChild(loadingIndicator);
  }
}
