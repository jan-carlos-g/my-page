import foto from './assets/jan.jpg';
import foto2 from './assets/jan2.jpg';
import backgorund from './assets/background.jpg';
import content2 from './assets/content2.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import CopyrightIcon from '@material-ui/icons/Copyright';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './styles/Welcome.css'

const socialMediaLinks = [
    {
        icon: <InstagramIcon color='inherit' />,
        link: 'https://www.instagram.com/jancarlos199/',
    },
    {
        icon: <GitHubIcon color='inherit' />,
        link: 'https://github.com/jan-carlos-g',
    },
    {
        icon: <LinkedInIcon color='inherit'/>,
        link: 'https://www.linkedin.com/in/jan-carlos-9a9514202/',
    },
    {
        icon: <FacebookIcon color='inherit' />,
        link: 'https://www.facebook.com/jan.carlos.948',
    },
];

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: '100px',
        flexShrink: 0,
        height: '100vh',
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
    listItem: {
        position: 'relative',
        transition: 'transform 0.3s',
        alignItems: 'center',
        margin: '10px 0',
    },
    logo: {
        maxWidth: '3%',
        color: '#333333',
        maxBlockSize: '3%',
        marginRight: '10px',
        marginBottom: '20px',
    },
    listItemBefore: {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '3px',
        bottom: '0',
        left: '0',
        backgroundColor: 'transparent',
    },
    listItemHover: {
        borderBottom: '5px solid #044d6b',
        transform: 'scale(1.1)',
    },
    listItemLink: {
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        color: '#fff',
        fontWeight: 600,
        fontSize: '24px',
        fontFamily: 'Arial, sans-serif',
        letterSpacing: '1px',
        margin: '0 10px',
    },
    listItemLinkHover: {
        boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.16)',
    },
}));




const Welcome = () => {
    const classes = useStyles();
    const background = `url(${backgorund})`;
    return (
        <div className="welcome">
            <div className="content" style={{backgroundImage:background}}>
                <div className="image-container">
                    <img src={foto} alt="Minha Foto" />
                </div>
                <div className="textBounce">
                    <div className="one">Olá!</div>
                    <div className="two">Meu nome é Jan Carlos,</div>
                    <div className="three"> sou um programador apaixonado pela criação de soluções.</div>
                </div>
                <List className={classes.listItemLink}>
                    {socialMediaLinks.map((item, index) => (
                        <ListItem
                            key={index}
                            button
                            component={Link}
                            to={item.link}
                            className={classes.listItem}
                        >
                            <ListItemIcon className={classes.listItemLink}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText />
                        </ListItem>
                    ))}
                </List>
            </div>
            <div className='cards'>
                <div className='card' style={{ backgroundColor: '#2596be' }}>
                    <div className="image-container2">
                        <img src={foto2} alt="Minha Foto" />
                    </div>
                    <div className='cardText'>
                        <h1>Sobre mim</h1>
                        <p>
                            Em resumo, sou uma pessoa orientada para desafios, com habilidades de resolução de problemas, comunicativo quando necessário e um amor genuíno pela programação e pelas oportunidades que ela oferece. Estou sempre aberto a novas experiências e ansioso para enfrentar os desafios do mundo da tecnologia com entusiasmo e dedicação.
                        </p>
                    </div>
                </div>
                <div className='card' style={{ backgroundColor: '#333333' }}>
                    <div className="image-container2">
                        <img src={content2} alt="Minha Foto" />
                    </div>
                    <div className='cardText'>
                        <h1>Curiosidades</h1>
                        <p>
                            Meus momentos de lazer envolvem tocar violão e guitarra, mergulhar em séries e curtir minhas músicas favoritas, especialmente do gênero rock. Busco a harmonia nas notas e na rotina, e a resolução de desafios é o que me move.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Welcome;
