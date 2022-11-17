import React,{useContext} from 'react'
import {
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
import { userContext } from '../../context/AuthContextProviders';
import { Link } from 'react-router-dom';


const Users = () => {
    const { currentUser,logOutUser, deleteUser } = useContext(userContext);
    return (
        <Container maxWidth="lg">
            
        <Typography variant="h3">About user</Typography>
            <>
            {currentUser ?
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Age</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Password</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                    <TableCell>{currentUser.name }</TableCell>
                    <TableCell>{currentUser.age }</TableCell>
                    <TableCell>{currentUser.pass }</TableCell>
                          <TableCell>
                          <button className="addTOCart__btn" onClick={logOutUser}>
                          <i class="ri-logout-box-r-line"></i>
                              </button>
                                    </TableCell>
                                    <TableCell>
                                        <Link to={`/update/${currentUser.id}`}>
                                    <button className="addTOCart__btn">
                          <i class="ri-edit-2-line"></i>
                              </button></Link>
                                    </TableCell>
                                    <TableCell>
                                        <button className="addTOCart__btn" onClick={deleteUser}>
                      <i class="ri-delete-bin-line"></i>
                      </button></TableCell>
                                    
                     
                   
                         
                             
                     
                  </TableRow>
                </TableBody>
              </Table>
                    </TableContainer>
                    :'Вы не вошли'}
          </>
                
      </Container>
  )
}

export default Users