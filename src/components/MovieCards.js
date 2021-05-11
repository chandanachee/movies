import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const MovieCards = (props) => {
  const { movie } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="Movie" className={classes.avatar}>
              {movie.title && movie.title.charAt(0)}
            </Avatar>
          }
          title={movie.title}
        />
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Release Date: </b>{movie.releaseDate}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {movie.synopsis}
        </Typography>
      </CardContent>
      </Card>
    </div>
  );
};

export default MovieCards;
