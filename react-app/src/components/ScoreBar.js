import * as React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { getPathwayScores, getScoreWarnings } from '../store/app';
import { EOI_FLOOR, HOME_AFFAIRS_SNAPSHOT, PATHWAY_NOTES } from '../scoring/snapshot';
import { Alert, Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    margin: '20px auto',
    width: '90%',
  },
}));

const PATHWAYS = [189, 190, 491];

export default function ScoreBar() {
  const classes = useStyles();
  const pathwayScores = useSelector(getPathwayScores);
  const warnings = useSelector(getScoreWarnings);

  return (
    <>
    <Paper
      className={classes.root}
      elevation={24}
      sx={{ bgcolor: 'success.main', p: 2, color: 'primary.contrastText' }}
    >
      <Typography variant='caption' fontWeight='fontWeightLight'>
        Pathway Scores (Awarded Points) vs EOI Floor {EOI_FLOOR}. Home Affairs Snapshot as at {HOME_AFFAIRS_SNAPSHOT.asAt}.
      </Typography>

      <Grid container direction="row" justifyContent='space-between' alignItems='flex-start' spacing={1} sx={{ mt: 1 }}>
        {PATHWAYS.map((subclass) => (
          <Grid item xs={12} sm={4} key={subclass}>
            <Typography variant='subtitle2' fontWeight='fontWeightLight'>
              Subclass {subclass}
            </Typography>
            <Typography variant='h6' component='p'>
              {pathwayScores[subclass]}
            </Typography>
            <Typography variant='caption' component='p'>
              {PATHWAY_NOTES[subclass]}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
    {warnings.map((warning) => (
      <Alert key={warning.type} severity="warning" sx={{ width: '90%', mx: 'auto', mt: 1 }}>
        {warning.message}
      </Alert>
    ))}
    </>
  );
}
