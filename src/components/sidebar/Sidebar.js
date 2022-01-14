import './Sidebar.css';
//import logo from '../../assets/logo.svg';

const Sidebar = ({  sidebarOpen, closeSidebar}) => {
        return(
          <div className={sidebarOpen ? "sidebar-responsive": ""} id="sidebar">
            < div className="sidebar__tutle">
              <div className= "sidebar__img">
                
                <hi>Spectrum.</hi>
              </div>
              <i 
            onClick={( ) => closeSidebar( )}
            className="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
            ></i>
            </div>
            <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                      <i className="fa fa-minus-square"></i>
                      <a href="#">início</a>
                    </div>
                    
                    <div className="sidebar__link">
                      <i className="fa fa-tachometer"></i>
                      <a href="#">Relatórios</a>
                    </div>
                    <div className="sidebar__link">
                      <i className="fa fa-building"></i>
                      <a href="#">Mensagens</a>
                      </div>
                      <div className="sidebar__link">
                      <i className="fa fa-archive"></i>
                      <a href="#">Contratos</a>
                     </div>
                     <div className="sidebar__link">
                      <i className="fa fa-bars"></i>
                      <a href="#">Alunos</a>
                      </div>
                      <div className="sidebar__link">
                      <i className="fa fa-cutlery"></i>
                      <a href="#">Chats</a>
                      </div>
                      
                      <div className="sidebar__link">
                      <i className="fa fa-male"></i>
                      <a href="#">Agenda</a>
                      </div>
                      <div className="sidebar__link">
                      <i className="fa fa-user-circle"></i>
                      <a href="#">Suporte</a>
                      </div>
                      <div className="sidebar__link">
                      <i className="fa fa-money"></i>
                      <a href="#">Configurações</a>
                      </div>
                      
                      <div className="sidebar__link">
                      <i className="fa fa-file-text"></i>
                      <a href="#">Política de privacidade</a>
                      </div>
                      <div className="sidebar__logout">
                      <i className="fa fa-power-off"></i>
                      <a href="#">Log out</a>
                     </div>
              </div>
      </div>
                      
     );

};

export default Sidebar;