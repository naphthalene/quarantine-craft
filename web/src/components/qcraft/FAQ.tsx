import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const PLUGIN_LIST = [
  "ArmoredElytra",
  "AutomatedCrafting",
  "ChestSort",
  "dynmap",
  "Essentials",
  "GrapplingHook",
  "Graves",
  "GriefPrevention",
  "Harbor",
  "LuckPerms",
  "mcMMO",
  "MoarBows",
  "TreeAssist",
  "Vault",
];

const FAQ = [
  {
    question: "What server plugins are installed?",
    answer: (
      <div>
        <Typography>
          This is a Paper server (v1.16.5), compatible with the vanilla client.
        </Typography>
        <Typography>
          Currently installed plugins are:
          <List dense={true}>
            {PLUGIN_LIST.map((plugin) => (
              <ListItem key={plugin}>
                <ListItemText primary={plugin} />
              </ListItem>
            ))}
          </List>
        </Typography>
      </div>
    ),
  },
  {
    question: "I can't seem to use many of the features others can.",
    answer: (
      <Typography>
        You may not have the necessary group membership yet. Please reach out to
        a server operator.
      </Typography>
    ),
  },
  {
    question: "Where can I get the username/password for the map?",
    answer: <Typography>Please reach out to a server operator.</Typography>,
  },
  {
    question: "How do I set map markers?",
    answer: (
      <Typography>
        <Link href="https://github.com/webbukkit/dynmap/wiki/Commands#markers">
          Follow the instructions here.
        </Link>
      </Typography>
    ),
  },
  {
    question: "How do I set up a shop?",
    answer: (
      <Typography>
        <Link href="https://wiki.mc-ess.net/wiki/Sign_Tutorial#Essentials_Eco_Signs">
          Follow the instructions here to make your own [Trade] shop!
        </Link>
      </Typography>
    ),
  },
  {
    question: "How do I claim a patch of land?",
    answer: (
      <div>
        <Typography>
          Your first claim will be created when you place your first chest.
        </Typography>
        <Typography>
          Acquire a golden shovel and right click on two opposing
          corners of land to create a claim.
        </Typography>
        <Typography>
          See more details in game with [/claimsbook], or visit spawn
          with [/warp spawn]!
        </Typography>
      </div>
    ),
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);

/**
 * Frequently asked questions
 */
const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h2">FAQ</Typography>
      </div>
      {FAQ.map(({ question, answer }) => (
        <Accordion key={question}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails>{answer}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Home;
