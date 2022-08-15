import React from "react";
import {
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
} from "@mui/material";

const FlightTravelerTable = ({ travelers }) => {
    return (
        <Table
            aria-label="Passenger information:"
            sx={{
                mt: 1,
                whiteSpace: "nowrap",
            }}
        >
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography color="textSecondary" variant="h6">
                            Ticket No.
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography color="textSecondary" variant="h6">
                            Passenger type
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography color="textSecondary" variant="h6">
                            Passenger name
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {travelers.map((trav) => (
                    <TableRow key={trav.id}>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                {trav.name}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                {trav.name}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                {trav.name}
                            </Typography>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default FlightTravelerTable;
