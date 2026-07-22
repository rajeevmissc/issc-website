import React, { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Table, Paper, TableBody, TableCell, Button, TableContainer, TableHead, TableRow, Typography, TextField, Box, InputAdornment, TablePagination } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEnvelope, faCalendarAlt, faBriefcase, faGlobe,faDownload } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { CSVLink } from "react-csv";
// ✅ Styled Table Components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: '#1976d2',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  '&.MuiTableCell-body': {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

function ClientsTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchRole, setSearchRole] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [searchCountry, setSearchCountry] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [contacts, setContacts] = useState([]);
  const fetchContactData = async () => {
    try {
      const response = await axios.get("https://issc-backend-app.vercel.app/contact/getContacts");
      setContacts(response.data.data);
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  };
  
  
  useEffect(() => {
    fetchContactData();
  }, []);

  // ✅ Filtering Logic
  const filteredRows = contacts.filter(row =>
    (searchTerm === '' || row.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || row.lastName.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (searchRole === '' || row.role.toLowerCase().includes(searchRole.toLowerCase())) &&
    (searchDate === '' || row.date === searchDate) &&
    (searchCountry === '' || row.country.toLowerCase().includes(searchCountry.toLowerCase())) &&
    (searchEmail === '' || row.email.toLowerCase().includes(searchEmail.toLowerCase()))
  );
  // ✅ Pagination Handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // ✅ Prepare CSV data
  const csvData = [
    [
      "S.N",
      "Name",
      "Company",
      "Role",
      "Email",
      "Contact",
      "Country",
      "Query",
      "Date",
      "Time",
    ],
    ...filteredRows.map((row, index) => [
      index + 1,
      row.name,
      row.company,
      row.role,
      row.email,
      row.phone,
      row.country,
      row.message,
      row.submittedDate,
      row.submittedTime,
    ]),
  ];

  return (
    <div className='pt-12'>
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold', color: '#1976d2' }}>
        🔍 Client List
      </Typography>

      {/* ✅ Enhanced Search & Filter Inputs */}
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 3 }}>
        <TextField
          label="Search Name"
          variant="outlined"
          size="small"
          sx={{ width: 200 }}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faSearch} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Role"
          variant="outlined"
          size="small"
          sx={{ width: 200 }}
          onChange={(e) => setSearchRole(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faBriefcase} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="date"
          variant="outlined"
          size="small"
          sx={{ width: 200 }}
          onChange={(e) => setSearchDate(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Country"
          variant="outlined"
          size="small"
          sx={{ width: 200 }}
          onChange={(e) => setSearchCountry(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faGlobe} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          size="small"
          sx={{ width: 200 }}
          onChange={(e) => setSearchEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faEnvelope} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      {/* Download CSV Button */}
      <div className='text-right p-2'> 
      <CSVLink data={csvData} filename="clients_list.csv">
          <Button variant="contained" color="primary" startIcon={<FontAwesomeIcon icon={faDownload} />}>
            Download CSV
          </Button>
        </CSVLink>
      </div>
      
      {/* ✅ Table Section */}
      <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">S.N</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Company</StyledTableCell>
              <StyledTableCell align="center">Role</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Country</StyledTableCell>
              <StyledTableCell align="center">Query</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Time</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.length > 0 ? (
              filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <StyledTableRow key={row._id}>
                    <StyledTableCell align="center">{row.serialNumber}</StyledTableCell>
                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                    <StyledTableCell align="center">{row.company}</StyledTableCell>
                    <StyledTableCell align="center">{row.role}</StyledTableCell>
                    <StyledTableCell align="center">{row.email}</StyledTableCell>
                    <StyledTableCell align="center">{row.phone}</StyledTableCell>
                    <StyledTableCell align="center">{row.country}</StyledTableCell>                 
                    <StyledTableCell align="center">{row.message}</StyledTableCell>
                    <StyledTableCell align="center">{row.submittedDate}</StyledTableCell>
                    <StyledTableCell align="center">{row.submittedTime}</StyledTableCell>
                  </StyledTableRow>
                ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={12} align="center">No results found</StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>

        </Table>
        <TablePagination rowsPerPageOptions={[3, 5, 10]} component="div" count={filteredRows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
      </TableContainer>
    </div>
  );
}

export default ClientsTable;
