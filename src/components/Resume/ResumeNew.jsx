import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import pdf from "../../Assets/CV1.pdf";
import pdf2 from "../../Assets/CV2.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function getPageWidth() {
  return Math.max(280, Math.min(window.innerWidth - 32, 880));
}

function ResumeNew() {
  const [pageWidth, setPageWidth] = useState(() =>
    typeof window === "undefined" ? 880 : getPageWidth(),
  );

  useEffect(() => {
    const updateWidth = () => setPageWidth(getPageWidth());
    window.addEventListener("resize", updateWidth, { passive: true });
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const downloadLink = (
    <a className="btn-primary" href={pdf2} target="_blank" rel="noopener noreferrer">
      <AiOutlineDownload aria-hidden="true" /> Download CV
    </a>
  );

  return (
    <section className="resume-section">
      <Container fluid>
        <div className="resume-actions">{downloadLink}</div>
        <div className="resume">
          <div className="resume-document">
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} width={pageWidth} />
            </Document>
          </div>
        </div>
        <div className="resume-actions">{downloadLink}</div>
      </Container>
    </section>
  );
}

export default ResumeNew;
