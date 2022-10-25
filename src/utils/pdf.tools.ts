import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const handleDownloadPdf = async (printRef: React.MutableRefObject<HTMLInputElement>, name: string, id: string): Promise<void> => {
	const pdf = new jsPDF({
		orientation: "p",
		unit: "mm",
		format: "a4",
		putOnlyUsedFonts: true,
	});

	const element = printRef.current;
	const canvas = await html2canvas(element, { allowTaint: true, useCORS: true });

	const data = canvas.toDataURL("image/png");

	const imgProperties = pdf.getImageProperties(data);

	const pdfWidth = pdf.internal.pageSize.getWidth();
	const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
	const pdfName = `${name}_${id}_https://vtmgenerator.vercel.app/_by:MalkavianSon`;

	pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);

	pdf.save(`${pdfName}.pdf`);
};

export default handleDownloadPdf;
