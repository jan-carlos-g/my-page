import './styles/AboutMe.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { TimelineContent, TimelineOppositeContent, TimelineDot, TimelineConnector, TimelineSeparator, TimelineItem, Timeline } from '@material-ui/lab';
import SchoolIcon from '@material-ui/icons/School';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import MemoryRoundedIcon from '@material-ui/icons/MemoryRounded';
import WorkOutlineTwoToneIcon from '@material-ui/icons/WorkOutlineTwoTone';
import Paper from '@material-ui/core/Paper';
import ReactNativeIcon from '@material-ui/icons/PhoneIphone';
import NodeJsIcon from '@material-ui/icons/DeviceHub';
import GitIcon from '@material-ui/icons/DeviceHub';
import VSCodeIcon from '@material-ui/icons/Code';
import GitLabIcon from '@material-ui/icons/DeviceHub';
import GitHubIcon from '@material-ui/icons/DeviceHub';
import ReduxIcon from '@material-ui/icons/LibraryBooks';
import SequelizeIcon from '@material-ui/icons/LibraryBooks';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardRoot: {
    maxWidth: 445,
    margin: 10,
    boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.16)',
    display: 'inline-block',
  },
  cardContent: {
    padding: theme.spacing(2),
  },
  media: {
    height: 140,
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Experience = () => {
  const classes = useStyles();
  return (
    <div className="about-me">

      <p className='content' style={{ backgroundColor: '#333333', fontFamily: 'Candara' }}>
        <h1 style={{ color: '#fff' }}>
          Formação
        </h1>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" style={{ color: '#fff' }}>
                2013-2016
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <SchoolIcon color="primary" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  IF
                </Typography>
                <Typography>Ensino médio técnico em informática, primeiro contato com diversas linguagens de programação</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" style={{ color: '#fff' }}>
                2014-2016
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <MemoryRoundedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  OBR
                </Typography>
                <Typography>Por 3 anos participei da olimpíada brasileira de robótica, conseguindo um título estadual e um vice, o que proporcionou duas participações na etapa nacional do evento.</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" style={{ color: '#fff' }}>
                2016-2017
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <WorkOutlineTwoToneIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Estágio MPF
                </Typography>
                <Typography>Ainda no ensino médio passei em um concurso para estagiar no Ministério Público Federal, fazendo uma função de auxiliar administrativo.</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" style={{ color: '#fff' }}>
                2017-Atualmente
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  UFRB
                </Typography>
                <Typography>Finalzinho de 2017 começo a cursar o BCET/Computação na UFRB, onde já cursei diversas matérias da área computacional como Inteligência Artificial, Engenharia de Software e Estrutura de Dados</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" style={{ color: '#fff' }}>
                2019-2020
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Empresa Júnior
                </Typography>
                <Typography>Fiz parte como desenvolvedor na Engenhe Jr, utilizando javascript, typescript, node e Ionic</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" style={{ color: '#fff' }}>
                2022-Atualmente
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot >
                <LaptopMacIcon color="primary" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  NUPI
                </Typography>
                <Typography>Atualmente sou bolsista e faço parte do time de desenvolvimentoc do Sistema de informação para gestão de informações
                  e atendimento do Núcleo de Políticas inclusivas da UFRB, utilizando React, Typescript, NodeJs, Sequelize, Redux.</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline></p>

      <p className='cards' style={{ fontFamily: 'Candara' }}>
        <div className='card'>
          <h1 style={{ textAlign: 'center', padding: 0 }}>Linguagens </h1>
          <ul style={{ listStyle: 'none', fontWeight: 'bold', fontSize: '22px' }}>
            <li>
              <span className="icon"> <img style={{ height: '25px', width: '25px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></span> JavaScript
            </li>
            <li>
              <span className="icon"> <img style={{ height: '25px', width: '25px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" /> </span> C
            </li>
            <li>
              <span className="icon" > <img style={{ height: '25px', width: '25px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" /></span> Java
            </li>
            <li>
              <span className="icon"> <img style={{ height: '25px', width: '25px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" /></span> C++
            </li>
            <li>
              <span className="icon"> <img style={{ height: '25px', width: '25px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></span> TypeScript
            </li>
          </ul>
        </div>

        <div className='card' style={{ backgroundColor: '#ffd44c', color: '#333333', alignItems: 'center' }}>
          <h1 style={{ textAlign: 'center', padding: 0 }}>Frameworks</h1>
          <ul style={{ listStyle: 'none', fontWeight: 'bold', fontSize: '22px' }}>
            <li>
              <span className="icon"> <img style={{ height: '25px', width: '25px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></span> React
            </li>
            <li>
              <span className="icon"> <ReactNativeIcon/></span> React Native
            </li>
            <li>
              <span className="icon"><img style={{ height: '25px', width: '25px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /><NodeJsIcon /></span> Node.js
            </li>
          </ul>
        </div>

        <div className='card' style={{ backgroundColor: '#383454' }}>
          <h1 style={{ textAlign: 'center', padding: 0 }}>Outros</h1>
          <ul style={{ listStyle: 'none', fontWeight: 'bold', fontSize: '22px' }}>
            <li>
              <span className="icon"><img style={{ height: '25px', width: '25px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /></span> Git
            </li>
            <li>
              <span className="icon"> <img style={{ height: '25px', width: '25px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" /> </span> GitLab
            </li>
            <li>
              <span className="icon"> <img style={{ height: '25px', width: '25px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /> </span> GitHub
            </li>
            <li>
              <span className="icon"> <img style={{ height: '25px', width: '25px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" /> </span> Redux
            </li>
            <li>
              <span className="icon"> <img style={{ height: '25px', width: '25px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" /> </span> Sequelize
            </li>
          </ul>
        </div>
      </p>
    </div>
  );
}

export default Experience;
