import { useState, useEffect } from "react";
import axios from "axios";
import {
    Table,
    TableCaption,
    TableHeader,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { MoreHorizontal, Edit2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setCompanies } from "../../store/company.slice.js";
import { COMPANY_END_POINT } from "../../utils/company.endpoints.js";

function CompaniesTable() {
    const [companies, setCompaniess] = useState([]); // Local state for companies
    const dispatch = useDispatch(); // Redux dispatch for managing global state
    const companiesFromStore = useSelector((state) => state.company.companies); // Fetching companies from Redux store

    useEffect(() => {
        const getCompanies = async () => {
            try {
                // Fetch companies only if not available in the Redux store
                if (
                    companiesFromStore.length === 0 ||
                    companiesFromStore === null ||
                    companiesFromStore === undefined
                ) {
                    const getCompaniesResponse = await axios.get(
                        `${COMPANY_END_POINT}/getAllCompany`,
                        {
                            withCredentials: true, // Include credentials for secure requests
                        }
                    );

                    // Check if the response is successful
                    if (getCompaniesResponse.status === 200) {
                        console.log(
                            "Companies response while getting it in home page for recruiter",
                            getCompaniesResponse
                        );
                        dispatch(setCompanies(getCompaniesResponse.data.companies)); // Update Redux store
                        setCompaniess(getCompaniesResponse.data.companies); // Update local state
                    } else {
                        console.log(
                            "Error while getting companies in CompaniesTable:",
                            getCompaniesResponse
                        );
                    }
                } else {
                    setCompaniess(companiesFromStore); // Use companies from Redux store if available
                }
            } catch (error) {
                console.log(
                    "Error while getting companies in CompaniesTable:",
                    error
                );
            }
        };

        getCompanies(); // Invoke the function
    },[]);

    return (
        <div>
            <Table>
                <TableCaption>List of registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companies.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center">
                                No companies available
                            </TableCell>
                        </TableRow>
                    ) : (
                        companies.map((company) => (
                            <TableRow key={company._id}>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage src={company.logo} />
                                    </Avatar>
                                </TableCell>
                                <TableCell>{company.name}</TableCell>
                                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal className="w-4 h-4" />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div className="flex items-center gap-2 cursor-pointer">
                                                <Edit2 className="w-4 h-4 mr-2" />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
}

export default CompaniesTable;
