import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import My12Form2 from "./My12Form2";


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
                    <Typography className={classes.heading}>I feel the time pass quickly when I… </Typography>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <My12Form2 />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>I feel most fulfilled when I…</Typography>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <My12Form2 />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>I look up to people who...</Typography>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <My12Form2 />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>One of the things I’ve been interested in for a long time is…</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <My12Form2 />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>I don’t want to miss out on…</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <My12Form2 />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>Even if it is challenging, I enjoy...</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <My12Form2 />
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </div>
    );
}

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