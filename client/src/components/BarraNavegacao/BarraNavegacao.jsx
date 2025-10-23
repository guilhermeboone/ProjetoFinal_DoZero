// Importando o css da barra de navegação
import styles from "./BarraNavegacao.module.css";

// Importar os componentes do bootstrap
import { Nav, Navbar, NavDropdown, Image, Accordion, AccordionBody } from "react-bootstrap";

// Importando os links do router
import { NavLink } from "react-router-dom";

// Importar as informações do contexto autenticação de usuário
import { AuthContext } from "../../contexts/UserContext.jsx";
import { useContext } from "react";

// Importando os icones
import { BsBoxes } from "react-icons/bs";

const BarraNavegacao = () => {
  //Importar o nome de usuário logado e função logout
  const { usuarioNome, logout } = useContext(AuthContext);

  // Guarda o id do usuário atual
  const idAtual = localStorage.getItem("id");

  // Guarda a imagem do usuário atual
  const imagemAtual = localStorage.getItem("imagemPerfil");

  // Imagem padrão
  const semImagem =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fbr%2Ficone-gratis%2Fperfil_4210449&psig=AOvVaw1Te32B0awlypfIsj5WMJwW&ust=1761172910397000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIirotyutpADFQAAAAAdAAAAABAE";

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark min-vh-100 max-vh-100"
      style={{ width: "250px" }}
    >
 
      <Navbar.Brand as={NavLink} to="/home" className="text-white mb-3">
        <BsBoxes className=" fs-4 " />
        <span className="fs-5 ms-2">C&G Solutions</span>
      </Navbar.Brand>
      {/* Opções menu */}
     <Nav className="flex-column mb-auto">
        {/* Opção home */}
        <Nav.Link as={NavLink} to="/home" className="text-white px-2">
          <BsBoxes className=" fs-4 " />
          <span className="fs-5 ms-2">Home</span>
        </Nav.Link>

        {/* Opção relatórios */}
        <Nav.Link as={NavLink} to="/relatorios" className="text-white px-2">
          <BsBoxes className=" fs-4 " />
          <span className="fs-5 ms-2">Relatórios</span>
        </Nav.Link>
        {/* Criando um acordeon */}

        <Accordion flush className="flex-column mb-auto" alwaysOpen>

        {/* Paginas produtos */}
        <Accordion.Item eventKey="0" className="bg-dark text-white">
          <Accordion.Header className={styles.accordionHeader}>
            <BsBoxes className="fs-4"/>
            <span className="ms-2"> Produtos </span>
            </Accordion.Header>
              <AccordionBody className= {`p-0 bg-dark ${styles.accordionBoddy}`} >
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link as={NavLink} to="/produtos"
                className="text-white ps-4">
                  <BsBoxes className="fs-5"/>
                  <span className="ms-2"> Listar </span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link as={NavLink} to="/produtos/cadastrar"
                className="text-white ps-4">
                  <BsBoxes className="fs-5"/>
                  <span className="ms-2"> Adicionar </span>

                </Nav.Link>
              </Nav>
          </AccordionBody>
        </Accordion.Item>
          {/* Fim produtos */}

        {/* Paginas produtos */}
        <Accordion.Item eventKey="1" className="bg-dark text-white">
          <Accordion.Header className={styles.accordionHeader}>
            <BsBoxes className="fs-4"/>
            <span className="ms-2"> Clientes </span>
            </Accordion.Header>
              <AccordionBody>
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link as={NavLink} to="/clientes"
                className="text-white ps-4">
                  <BsBoxes className="fs-5"/>
                  <span className="ms-2"> Listar </span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link as={NavLink} to="/clientes/cadastrar"
                className="text-white ps-4">
                  <BsBoxes className="fs-5"/>
                  <span className="ms-2"> Adicionar </span>

                </Nav.Link>
              </Nav>
          </AccordionBody>
        </Accordion.Item>
          {/* Fim produtos */}

        {/* Paginas produtos */}
        <Accordion.Item eventKey="2" className="bg-dark text-white">
          <Accordion.Header className={styles.accordionHeader}>
            <BsBoxes className="fs-4"/>
            <span className="ms-2"> Funcionarios </span>
            </Accordion.Header>
              <AccordionBody className= {`p-0 bg-dark ${styles.accordionBoddy}`} >
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link as={NavLink} to="/funcionarios"
                className="text-white ps-4">
                  <BsBoxes className="fs-5"/>
                  <span className="ms-2"> Listar </span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link as={NavLink} to="/funcionarios/cadastrar"
                className="text-white ps-4">
                  <BsBoxes className="fs-5"/>
                  <span className="ms-2"> Adicionar </span>

                </Nav.Link>
              </Nav>
          </AccordionBody>
        </Accordion.Item>
          {/* Fim produtos */}

        {/* Paginas produtos */}
        <Accordion.Item eventKey="3" className="bg-dark text-white">
          <Accordion.Header className={styles.accordionHeader}>
            <BsBoxes className="fs-4"/>
            <span className="ms-2"> Pedidos </span>
            </Accordion.Header>
              <AccordionBody className= {`p-0 bg-dark ${styles.accordionBoddy}`} >
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link as={NavLink} to="/pedidos"
                className="text-white ps-4">
                  <BsBoxes className="fs-5"/>
                  <span className="ms-2"> Listar </span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link as={NavLink} to="/pedidos/cadastrar"
                className="text-white ps-4">
                  <BsBoxes className="fs-5"/>
                  <span className="ms-2"> Adicionar </span>

                </Nav.Link>
              </Nav>
          </AccordionBody>
        </Accordion.Item>
                </Accordion>
          {/* Fim produtos */}
      </Nav>
      
      <hr className="border-secondary"/>

      {/* Visualizar foto e nome do perfil, e opções */}
      <Nav className="dropdown pb-4">
        <NavDropdown
        title={<span className="text-white align-items-center">
          <Image 
          src={imagemAtual == "null" ? semImagem: imagemAtual}
          width={66}
          height={66}
          roundedCircle
          className="me-2"
          />
          {usuarioNome}
        </span>
      }
        menuVariant="dark">
          {/* Opção de editar perfil */}
          <NavDropdown.Item as={NavLink} to={`/funcionarios/editar/${idAtual}`}>
            Editar
          </NavDropdown.Item>
          {/* Voltar para a tela de login */}
          <NavDropdown.Item as={NavLink} to="/login" onClick={logout}>
            Sair
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>

    </div>
  );
};

export default BarraNavegacao;
