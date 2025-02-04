import React, { useState } from 'react'
import { 
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  Box,
  Link,
} from '@material-ui/core/'

import {
  Menu as MenuIcon,
  Add as AddIcon,
  History as HistoryIcon,
} from '@material-ui/icons/'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

import Copyright from '../tail'
import useStyles from './style'
import Processo from '../../components/Processo/Processo.js'

export default function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const icons = [<HistoryIcon /> , <AddIcon />, <SettingsApplicationsIcon />, <ExitToAppIcon /> ]
  const caminho = ['/home', '#', '/cadastro', '/', ]

  // Modelo de Processo
  const processos = [
  {
    data: "01/02/2018",
    descricao: "batata",
    outrasinfos: "OKAI"
  },
  {
    data: "02/02/2018",
    descricao: "cenoura",
    outrasinfos: "OKAI"
  },
  {
    data: "03/02/2018",
    descricao: "jiló",
    outrasinfos: "OKAI"
  },
  {
    data: "04/02/2018",
    descricao: "Não sei mais oq colocar",
    outrasinfos: "OKAI"
  }

]


  // 

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {['Página Inicial', 'Criar Processo', 'Alterar Dados', 'Sair',].map((text, index) => (
          //<Link href={index === 0 ? "#" : index === 1 ? "#" : index === 2 ? "#" : index === 3 ? "/" : index === 4 ? "/recupera" : "/cadastro"} className={classes.link}>
          <Link href={caminho[index]} className={classes.link} style={{color:"#000", textDecoration:"none"}}>
            <ListItem button key={text}>
              {/* <ListItemIcon>{index === 0 ? <HomeIcon /> : index === 1 ? <HistoryIcon /> : index === 2 ? <AddIcon /> : <WarningIcon />}</ListItemIcon> */}
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          </Link>
        ))}
      </List>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Página Inicial
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {

          // processos.length === 0 ? <Box style={{fontSize:"5vw", marginTop:"20%"}}><div>Nenhum processo foi criado ainda</div></Box> :
          processos.map(
            (element, index)=>{
              return <Processo data = {element.data} desc = {element.descricao}/>
            }
          )
        }
      </main>
    </div>
  );
}