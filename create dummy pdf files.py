from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet

documents = [
    {
        'id': 1,
        'name': 'Petição Inicial de Ação Civil',
        'date': '2024-10-13',
        'children': [
            {
                'id': 2,
                'name': 'Citação',
                'date': '2024-10-14',
                'children': [
                    {
                        'id': 3,
                        'name': 'Resposta à Citação',
                        'date': '2024-10-15',
                        'children': [
                            {
                                'id': 4,
                                'name': 'Contestação',
                                'date': '2024-10-16',
                                'children': [
                                    {
                                        'id': 5,
                                        'name': 'Réplicas à Contestação',
                                        'date': '2024-10-17',
                                        'children': [
                                            {'id': 6, 'name': 'Juntada de Documentos', 'date': '2024-10-18'},
                                            {'id': 7, 'name': 'Pedido de Tutela Provisória', 'date': '2024-10-19'},
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        'id': 8,
        'name': 'Ação de Indenização',
        'date': '2024-10-20',
        'children': [
            {
                'id': 9,
                'name': 'Laudo Pericial',
                'date': '2024-10-21',
                'children': [
                    {
                        'id': 10,
                        'name': 'Manifestação sobre o Laudo',
                        'date': '2024-10-22',
                        'children': [
                            {
                                'id': 11,
                                'name': 'Pedido de Produção de Provas',
                                'date': '2024-10-23',
                                'children': [
                                    {'id': 12, 'name': 'Provas Documentais', 'date': '2024-10-24'},
                                    {'id': 13, 'name': 'Provas Testemunhais', 'date': '2024-10-25'},
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        'id': 14,
        'name': 'Ação de Alimentos',
        'date': '2024-10-26',
        'children': [
            {
                'id': 15,
                'name': 'Pedido de Alimentos',
                'date': '2024-10-27',
                'children': [
                    {
                        'id': 16,
                        'name': 'Decisão Judicial',
                        'date': '2024-10-28',
                        'children': [
                            {
                                'id': 17,
                                'name': 'Recurso de Apelação',
                                'date': '2024-10-29',
                                'children': [
                                    {'id': 18, 'name': 'Contrarrazões', 'date': '2024-10-30'},
                                    {'id': 19, 'name': 'Juntada de Novos Documentos', 'date': '2024-10-31'},
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        'id': 20,
        'name': 'Embargos de Declaração',
        'date': '2024-11-01',
        'children': [
            {
                'id': 21,
                'name': 'Decisão dos Embargos',
                'date': '2024-11-02',
                'children': [
                    {
                        'id': 22,
                        'name': 'Recurso Especial',
                        'date': '2024-11-03',
                        'children': [
                            {
                                'id': 23,
                                'name': 'Petição de Admissibilidade',
                                'date': '2024-11-04',
                                'children': [
                                    {'id': 24, 'name': 'Parecer do Ministério Público', 'date': '2024-11-05'},
                                    {'id': 25, 'name': 'Juntada de Novos Fatos', 'date': '2024-11-06'},
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        'id': 26,
        'name': 'Ação de Usucapião',
        'date': '2024-11-07',
        'children': [
            {
                'id': 27,
                'name': 'Certidão de Registro de Imóveis',
                'date': '2024-11-08',
                'children': [
                    {
                        'id': 28,
                        'name': 'Manifestação do Réu',
                        'date': '2024-11-09',
                        'children': [
                            {
                                'id': 29,
                                'name': 'Relatório de Vistoria',
                                'date': '2024-11-10',
                                'children': [
                                    {'id': 30, 'name': 'Pedido de Desocupação', 'date': '2024-11-11'},
                                    {'id': 31, 'name': 'Protesto de Irregularidade', 'date': '2024-11-12'},
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
]

def add_documents(elements, documents, level=0):
    """Recursively adds document information to the PDF."""
    for doc in documents:
        # Create a styled paragraph for each document
        doc_style = {'fontSize': 14 - level, 'spaceAfter': 12, 'leftIndent': level * 20}
        elements.append(Paragraph(f"{doc['name']} (Data: {doc['date']})", style=doc_style))
        
        # Add a spacer for visual separation
        elements.append(Spacer(1, 0.2 * inch))

        # Recursively add children documents
        if 'children' in doc and doc['children']:
            add_documents(elements, doc['children'], level + 1)

def create_pdf(pdf_filename, document):
    """Creates a PDF for a specific document and its children."""
    doc = SimpleDocTemplate(pdf_filename, pagesize=letter)
    elements = []

    # Add the main document
    elements.append(Paragraph(f"{document['name']} (Data: {document['date']})", style={'fontSize': 16, 'spaceAfter': 12}))
    elements.append(Spacer(1, 0.4 * inch))

    # Add child documents
    if 'children' in document:
        add_documents(elements, document['children'])

    # Build the PDF
    doc.build(elements)

if __name__ == "__main__":
    for document in documents:
        pdf_filename = f"{document['name'].replace(' ', '_')}.pdf"
        create_pdf(pdf_filename, document)
