import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel2 from "../ExpansionComps/ExpansionPanel2";

export default function MyCard() {
  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom >
          Part 2: Via Positiva
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Write each sentence stem and then immediately finish the sentence. <br></br> Do this for each stem 12 times. <br></br>Do not worry about spelling, grammar, or repeating yourself. <br></br>Do not self-censor. These are for you and nobody else. Follow your gut.
        </Typography>
        <ExpansionPanel2 />
      </CardContent>
    </Card>
  );
}


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 12,
  },
});