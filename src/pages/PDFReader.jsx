import { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import PropTypes from 'prop-types';
import Aside from '../components/Aside';
import Nav from '../components/Nav';
import NavDocuments from '../components/NavDocuments';
import { useLocation, useNavigate } from 'react-router-dom';

// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const DEFAULT_PDF = '/assets/pdfs/exemplo.pdf';

const PDFViewer = ({ fileName = DEFAULT_PDF }) => {
  const canvasRefs = useRef({});
  const [numPages, setNumPages] = useState(0);
  const [scale, setScale] = useState(1.5);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        setLoading(true);
        setError(null);

        // Load the PDF document
        const loadingTask = pdfjsLib.getDocument(fileName);
        const pdf = await loadingTask.promise;
        setNumPages(pdf.numPages);

        // Render each page
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale });
          const canvas = canvasRefs.current[pageNum];
          
          if (canvas) {
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
              canvasContext: context,
              viewport: viewport
            };

            await page.render(renderContext).promise;
          }
        }
        setLoading(false);
      } catch (err) {
        console.error('Error loading PDF:', err);
        setError('Failed to load PDF document');
        setLoading(false);
      }
    };

    loadPDF();
  }, [fileName, scale]);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-4 flex gap-2">
        <button
          onClick={handleZoomOut}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
        <button
          onClick={handleZoomIn}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {loading && (
        <div className="text-center p-4">Loading PDF...</div>
      )}

      {error && (
        <div className="text-red-500 p-4">{error}</div>
      )}

      <div className="pdf-container overflow-auto max-h-[calc(100vh-200px)]">
        {Array.from(new Array(numPages), (_, index) => (
          <div key={index + 1} className="mb-4">
            <canvas
              ref={ref => canvasRefs.current[index + 1] = ref}
              className="border shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

PDFViewer.propTypes = {
  fileName: PropTypes.string
};

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fileName } = location.state || {};
  const pdfFileName = fileName || DEFAULT_PDF;

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex bg-gray-100">
      <Aside />
      <div className='w-full flex flex-col align-center px-6'>
        <Nav />
        <div className="w-full bg-[#F7F9FA] border mt-20 rounded-t-lg h-full relative">
          <div className="absolute top-0 left-0 w-full p-6">
            <div className="flex justify-between w-full items-center">
              <div className="bg-[rgba(255,255,255,.7)] flex items-center px-3 pt-0.5 pb-1 border border-[2px] border-[#ddd] rounded-md">
                <h1 className="me-2">Documento: </h1>
                <span className="font-bold">{fileName || 'Exemplo'}</span>
              </div>
              <button 
                onClick={handleGoHome} 
                className="bg-[rgba(255,255,255,.7)] px-2 pt-0.5 pb-1 border border-[2px] border-[#ddd] text-gray-900 rounded-md hover:bg-gray-200 transition duration-200"
              >
                Fechar <i className="ms-1 fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <div className="pt-16 p-4">
            <PDFViewer fileName={pdfFileName} />
          </div>
        </div>
        <NavDocuments />
      </div>
    </div>
  );
};

export default App;