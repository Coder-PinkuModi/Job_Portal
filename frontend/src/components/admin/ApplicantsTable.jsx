import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { Table, TableCaption, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Edit2 } from "lucide-react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { JOBSENDPOINT } from "../../utils/jobs.enpoints.js"

export default function ApplicationTable() {
    const { jobId } = useParams()
    const [applications, setApplications] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getApplications = async () => {
            try {
                const response = await axios.get(`${JOBSENDPOINT}/getJobApplications/${jobId}`, {
                    withCredentials: true
                })
                console.log(response)
                setApplications(response.data.applications)
            } catch (error) {
                console.log(error)
            }
        }
        getApplications()
    }, [])

    const handleNavigationToJobPage = (jobId) => {
        navigate(`/admin/jobs/${jobId}`)
    }

    return (
        <div className="w-full">
            <Table>
                <TableCaption>Applications</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableCell>Job Title</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Applicant</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {applications.map((application) => (
                        <TableRow key={application._id}>
                            <TableCell>
                                <div className="flex items-center">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-muted-foreground">
                                            {application.job.title}
                                        </p>
                                    </div>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <MoreHorizontal className="text-muted-foreground hover:text-muted-foreground/70" />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-56">
                                            <div className="space-y-2">
                                                <p className="text-sm font-medium text-muted-foreground">
                                                    Job description
                                                </p>
                                                <div className="overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full text-sm font-light text-muted-foreground">
                                                    {application.job.description}
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center">
                                    <AvatarImage src={application.company.logo} className="w-8 h-8" />
                                    <div className="flex-1 ml-3">
                                        <p className="text-sm font-medium text-muted-foreground">
                                            {application.company.name}
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center">
                                    <AvatarImage src={application.applicant.avatar} className="w-8 h-8" />
                                    <div className="flex-1 ml-3">
                                        <p className="text-sm font-medium text-muted-foreground">
                                            {application.applicant.name}
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge variant="purple">{application.status}</Badge>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center">
                                    <Button
                                        variant="outline"
                                        className="text-sm font-medium text-muted-foreground hover:text-muted-foreground/70"
                                        onClick={() => handleNavigationToJobPage(application.job._id)}
                                    >
                                        View Job
                                    </Button>
                                    <Edit2 className="ml-2 text-muted-foreground hover:text-muted-foreground/70" />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}