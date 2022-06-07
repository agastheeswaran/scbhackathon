import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ReportConfig from "./ReportConfig.json"; 


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const App = () => {
  const classes = useStyles();
  const [report, setReport] = useState([]);
  const [search, setSearch] = useState("");

  const getReportData = async (url) => {
    try {
      const data = await axios.get(
        url

      );
      console.log(data.data);
      setReport(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getReportData();
  }, []);
  return (
    <div className="App">
      {/* <h1>Lets code tamil</h1>
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      /> */}

      {/* {product
        .filter((item) => {
          if (search == "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          return (
            <p>
              {item.name} - {item.price}
            </p>
          );
        })} */}

<div>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
        <TableHead>

         <TableRow>
         <StyledTableCell>ReportID</StyledTableCell>
         <StyledTableCell>Report Name</StyledTableCell>
         <StyledTableCell>ReportURL</StyledTableCell>
         <StyledTableCell>Application</StyledTableCell>
         </TableRow>
         </TableHead>

          {
          ReportConfig.ReportLists.map((reports, i) => {
          return (
          <div key={i}>
          <div>
                 <TableRow>
                 <StyledTableCell><text>{reports.ReportID}</text></StyledTableCell>
                 <StyledTableCell><text>{reports.ReportName}</text></StyledTableCell>
                 <StyledTableCell><text>{reports.Application}</text></StyledTableCell>
                 <StyledTableCell><text>{reports.ReportURL}</text></StyledTableCell>
                 <StyledTableCell><button onClick={() => getReportData(reports.ReportURL)}> Run Report</button></StyledTableCell>
                 </TableRow>
          </div>
          </div>
          );
          })
          }

      </Table>
      </TableContainer>

          </div>
          <div>
            <br></br>
          </div>
          
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {/* <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align="right">Product Price</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {report
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                // for (var [key, value] of item)
                // {
                  //let keys = Array.from( item.keys() );

                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {item.id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.price}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.status}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.email}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.due_on}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.user_id}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.gender}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.post_id}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.body}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              //}
              })}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
  
};

export default App;
