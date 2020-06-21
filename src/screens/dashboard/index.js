import React ,{ useState, useEffect } from 'react';
import {Container, CssBaseline, Typography,Button} from '@material-ui/core';
import  { ElemetsTable,  ElementBar } from '../../components';
import { vihecals } from '../../mock';
const Dashboard = () => {

  const [vihecalsList, setVihecals] = useState([]);

  useEffect(() => {
    setVihecals(vihecals)
  });

return (<React.Fragment>
<CssBaseline />
<ElementBar/>
<Container maxWidth="false">
  <Typography component="div">
  <ElemetsTable list={vihecalsList}/>
      </Typography>
</Container>
</React.Fragment>)
}

export default Dashboard;