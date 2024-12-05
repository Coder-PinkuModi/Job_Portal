import { Table, TableCaption, TableHeader, TableHead, TableRow } from "@/components/ui/table"
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
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
            </Table>
        </div>
    )
}

export default CompaniesTable