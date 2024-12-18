import { Table, TableCaption, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { MoreHorizontal, Edit2 } from "lucide-react";

function CompaniesTable() {
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
                    <TableRow>
                        <TableCell>
                            <Avatar>
                                <AvatarImage src="https://res.cloudinary.com/dliksynfp/image/upload/v1733408044/it7xnnseb082nopkqb8p.png" />
                            </Avatar>
                        </TableCell>
                        <TableCell>Company Name</TableCell>
                        <TableCell>10-10-2023</TableCell>
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
                </TableBody>
            </Table>
        </div>
    );
}

export default CompaniesTable;
