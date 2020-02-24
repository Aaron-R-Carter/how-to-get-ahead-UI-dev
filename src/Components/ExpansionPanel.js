import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import My12Form from "./My12Form";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: 30,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function ControlledExpansionPanels() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>I feel miserable when I… </Typography>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <My12Form />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>I dread… </Typography>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <My12Form />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>I’m good at but don’t particularly enjoy…</Typography>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <My12Form />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>I can’t imagine doing … for the rest of my life.</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <My12Form />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>I don’t understand why anybody would… </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <My12Form />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>One thing that doesn’t appeal to me at all is...</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <My12Form />
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </div>
    );
}
