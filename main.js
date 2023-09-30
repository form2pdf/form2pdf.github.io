
const { PDFDocument, StandardFonts, rgb, degrees, PageSizes } = PDFLib;


async function createPdf() {
    // 0. initial setup
    const pdfDoc = await PDFDocument.create()
    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
    const logoImageUrl = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
    const logoImageBytes = await fetch(logoImageUrl).then((res) => res.arrayBuffer())
    const logoImage = await pdfDoc.embedJpg(logoImageBytes)

    // 1. write header on first page
    const page = pdfDoc.addPage(PageSizes.A4)
    const { width, height } = page.getSize()
    const fontSize = 14;

    // calculate the position os _headers_pn to align right and (possibly) fill CMI
    page.drawText(_header_p0, {
        x: width - (_header_p0.length * fontSize / 1.5),
        y: height - 4 * fontSize,
        size: fontSize,
        font: helveticaBold,
        color: PDFLib.rgb(0, 0, 0),
    })
    // calculate the position of the logoImage to align left, do the same on the second page

    // 2. write the points
    // the Cláusula n.ª, has to be bold and centered
    // the test must be caluclated in line breaks based on the page widht and heigh, create a new page when height is reached
    // i.e., do something like a for loop to build the paged based on input.

    // 3. write the footer
    // you'll have to align the two to different sides
    page.drawText(_footer_p2, {
        x: 0,
        y: 100,
        size: fontSize,
        font: helveticaBold,
        color: PDFLib.rgb(0, 0, 0),
    })

    const pdfBytes = await pdfDoc.save()

    // Trigger the browser to download the PDF document
    download(pdfBytes, "foobar.pdf", "application/pdf");
}


const _header_p0 = `CONTRATO DE MEDIAÇÃO IMOBILIÁRIA`
const _header_p1 = `(Nos termos da Lei nº 15/2013 de 8 de fevereiro)`
const _header_p2 = `CMI n.º____/________`

const _body = `
Entre:
Desfecho Fidedigno Unipessoal Lda, com sede social na R. do Olival nº9 1ºEsq, B. Mira Sul, 3660-495 em S. Pedro Sul, e com o NIF 517 351 455, detentora da
licença AMI n.º 21936, emitida pelo Instituto dos Mercados Públicos, do Imobiliário e da Construção I. P. (IMPIC, I. P.), adiante designada como Mediadora,
E
do cliente)_______________________________________________________, aqui representado por (nome do procurador, se o houver)
____________________________
(estado civil) ________________, sob o regime de bens __________________, com
(cônjuge)
________________________________________, residente(s) na _____________________________________________, em ____________, portador(es)
do(s) CC/BI nºs _______________ e _______________ e contribuinte(s) fiscal(is) nºs _______________ e _______________ ,com telemóvel nº __________ e
__________ e e-mail ____________________________, adiante designado(s) como Segundo(s) Contratante(s) na qualidade de _______________ (Proprietário;
Senhorio; Trespassante; Outro), é celebrado o presente Contrato de Mediação Imobiliária que se rege pelas seguintes cláusulas:
(nome
Cláusula 1.ª
Identificação do Imóvel
O Segundo Contratante é proprietário e legítimo possuidor da fração autónoma/prédio (rústico/urbano)/estabelecimento comercial, destinado(a) a
_______________ , sendo constituído por ___ divisões assoalhadas, com área total de ______ m2, sito na (Rua, Avenida)
________________________________________________, em ____________, (freguesia) ____________, (concelho) ____________, descrito na Conservatória
do Registo Predial de ____________, sob a ficha n.º ______, com licença de construção/utilização n.º ____________, emitida pela Câmara Municipal de
____________, em ___/___/_____ e inscrito na matriz predial (urbana/rústica) com o artigo n.º ___ da freguesia de ____________/ omisso na matriz
___________. O imóvel com o Certificado de Desempenho Energético e da Qualidade do Ar Interior com o Nº do CER CE __________________, emitido em
___/___/______, por _____________________ - Perito nº ______________ (quando aplicável)
Cláusula 2.ª
Identificação do Negócio
1 - A Mediadora obriga-se a diligenciar no sentido de conseguir interessado na __ Compra __ Trespasse __ Arrendamento, pelo preço de _______________
Euros (________________________________________________) desenvolvendo para o efeito ações de promoção e recolha de informações sobre os negócios
pretendidos e características dos respetivos imóveis.
2 - Qualquer alteração ao preço fixado no número anterior deverá ser comunicada de imediato e por escrito à Mediadora.
Cláusula 3.ª
Ónus e Encargos
(_) O imóvel encontra-se livre de quaisquer ónus ou encargos.
(_) O Segundo Contratante declara que sobre o imóvel descrito na cláusula 1.ª recaem os seguintes ónus e encargos (hipotecas e penhoras) _____________ pelo
valor de _______________ Euros a favor de ______________________.
Cláusula 4.ª
Regime de Contratação
1 - O Segundo Contratante contrata a Mediadora em regime de
(_) Exclusividade
(_) Não exclusividade
2 - O regime de exclusividade previsto no presente contrato implica que só a Mediadora contratada tem o direito de promover o negócio objeto do contrato de
mediação imobiliária durante o respetivo período de vigência.
Cláusula 5.ª
Remuneração
1 - A remuneração só será devida se a Mediadora conseguir interessado que concretize o negócio visado pelo presente contrato, nos termos e com as exceções
previstas no artigo 19.º da Lei n.º 15/2013, de 8 de fevereiro.
2 - O Segundo Contratante obriga-se a pagar à Mediadora a título de remuneração:
(_) A quantia de ____% calculada sobre o preço pelo qual o negócio é efetivamente concretizado, acrescida de IVA à taxa legal em vigor.
(_) A quantia de ________ Euros (___________________________), acrescida do IVA à taxa legal em vigor.
3 - O pagamento da remuneração apenas será efetuado nas seguintes condições:
(_) O total da remuneração aquando da celebração da escritura ou conclusão do negócio visado.
(_) ___ % após a celebração do contrato-promessa e o remanescente ___ % na celebração da escritura ou conclusão do negócio.
(_) O total da remuneração aquando da celebração do contrato-promessa.
Cláusula 6.ª
Obtenção de Documentos
1 - No âmbito do presente contrato, a Mediadora, na qualidade de mandatária sem representação, obriga-se a prestar os serviços conducentes à obtenção da
documentação necessária à concretização do(s) negócio(s) visado(s) pela mediação.
2 - A remuneração pelos serviços referidos no número anterior considera-se incluída no montante acordado na cláusula 5.ª e só será devida nos termos aí
descritos.
3 - Sem prejuízo do disposto no n.º 2, a Mediadora mantém, sempre, o direito ao reembolso das despesas efetuadas com a obtenção da documentação.
(Esta cláusula é facultativa e só deverá ser preenchida se as partes assim o pretenderem e acordarem.)Cláusula 7.ª
Garantias da Atividade de Mediação
Para garantia da responsabilidade emergente da sua atividade profissional, a Mediadora celebrou um contrato de seguro obrigatório de responsabilidade civil
no valor de 150.000,00 Euros (cento e cinquenta mil euros), apólice n.º 0007902198, através da seguradora TRANQUILIDADE com sede na Av. da Liberdade, 242
1250-149 Lisboa.
Cláusula 8.ª
Prazo de Duração do Contrato
O presente contrato tem uma validade de ___ (dias/meses) contados a partir da data da sua celebração renovando-se automaticamente por iguais e sucessivos
períodos de tempo, caso não seja denunciado por qualquer das partes contratantes através de carta registada com aviso de receção ou outro meio equivalente,
com a antecedência mínima de 10 dias em relação ao seu termo.
Cláusula 9.ª
Dever de Colaboração e Obrigações do Segundo Contratante
1 - O Segundo Contratante colaborará com a Mediadora na entrega de todos os elementos julgados necessários e úteis no prazo de ___ dias, a contar da data
de assinatura do presente contrato.
2 - O Segundo Contratante declara e garante que, no âmbito das disposições legais aplicáveis de natureza preventiva e repressiva de combate ao branqueamento
de capitais e ao financiamento do terrorismo, e em relação a todos os atos e operações abrangidas pelo presente contrato, se obriga a cooperar na
disponibilização de informação relevante à Mediadora, designadamente sobre a identidade das partes contratantes, do objeto do negócio imobiliário e dos
meios de pagamento das transações imobiliárias.
3 - O Segundo Contratante obriga-se ainda a cumprir todas as disposições legais e regulamentares decorrentes do Sistema de Certificação Energética,
designadamente a obrigação de providenciar, nos termos e prazos devidos, pela emissão do respetivo Certificado Energético em relação ao imóvel objeto do
presente contrato (se aplicável).
4 - O Segundo Contratante obriga-se, também, a dar cumprimento às regras referentes à Ficha Técnica da Habitação, nos termos do disposto no Decreto-Lei n.º
68/2004, de 25 de março, nos termos e prazos devidos (se aplicável).
Cláusula 10.ª
Angariador Imobiliário
Na preparação do presente contrato de mediação imobiliária colaborou o angariador imobiliário (nome) ___________________________, portador do Cartão
de Cidadão/Bilhete de Identidade n.º ___________ e/ou Contribuinte Fiscal n.º___________.
Cláusula 11.ª
Foro Competente
Para dirimir quaisquer litígios emergentes da execução do presente contrato, as partes acordam entre si estabelecer como competente o Foro da Comarca de
___________, com a expressa renúncia a qualquer outro.
(Esta cláusula é facultativa e só deverá ser preenchida se as partes assim o pretenderem e acordarem.)
Cláusula 12.ª
Resolução Alternativa de Litígios
1 - Nos termos do disposto no artigo 18.º da Lei n.º 144/2015, de 8 de setembro, na redação atual, em caso de litígio ou insatisfação com o serviço prestado
poderá o Segundo Contratante recorrer ao Centro de resolução alternativa de litígios de consumo___________________ com o sítio eletrónico na Internet
___________________ ,de que a Mediadora é aderente.
2 - O disposto no número anterior não priva o consumidor do direito que lhe assiste de submeter o litígio a apreciação e decisão de um tribunal judicial.
(Esta cláusula só deverá ser preenchida se a empresa de mediação imobiliária for aderente de alguma entidade de resolução alternativa de litígios de consumo, ao abrigo do disposto
na Lei n.º 144/2015, de 8 de setembro, na redação atual.)
Cláusula 13.ª
Limites aos pagamentos em numerário
Os intervenientes no presente contrato abstêm-se de celebrar ou de algum modo participar em quaisquer negócios de que, no âmbito da sua atividade
profissional, resulte a violação dos limites à utilização de numerário, previstos no artigo 63.º-E da Lei Geral Tributária, aprovada pelo Decreto-Lei n.º 398/98, de
17 de dezembro, aditado pela Lei n.º 92/2017, de 22 de agosto, e de acordo com o artigo 10.º da Lei n.º 83/2017, de 18 de agosto.
Cláusula 14.ª
Proteção de Dados Pessoais
1 - Em cumprimento do disposto no Regulamento (EU) 2016/679 do Parlamento Europeu e do Conselho, de 27 de abril (RGPD), e demais legislação aplicável,
no que diz respeito ao tratamento de dados pessoais e à livre circulação desses dados, o Segundo Contratante ___ autoriza/___ não autoriza que os seus dados
pessoais recolhidos, transmitidos ou processados informaticamente pela Mediadora sejam incorporados na sua base de dados. Estes dados destinam-se a
processamentos administrativos, estatísticos e de apresentação/divulgação de produtos e serviços comercializados.
2 - A Mediadora compromete-se a, designadamente, não copiar, reproduzir, adaptar, modificar, alterar, apagar, destruir, divulgar ou por qualquer outra forma
colocar à disposição de terceiros os dados pessoais do Segundo Contratante a que tenha tido acesso no âmbito do presente contrato, sem que para tal tenha
sido expressamente autorizada, comprometendo-se a utilizá-los exclusivamente para as finalidades referidas.
3 - Mais se declara que, nos termos e para os efeitos previstos nos artigos 12.º a 23.º do RGPD, a Mediadora informou o Segundo Contratante e este tomou
conhecimento dos direitos que lhe assistem relativamente aos seus dados pessoais.`

const _footer_p0 = `
Depois de lido e ratificado, as partes comprometem-se a cumprir este contrato segundo os ditames da boa-fé, e vão assinar.
Feito em duplicado, destinando-se um exemplar a cada uma das partes intervenientes.`
const _footer_p1 = `_________, ____ de _______________ de ______.`
const _footer_p2 = `A Mediadora
______________________________`
const _footer_p3 = `O(s) Segundo(s) Contratante(s)
______________________________`