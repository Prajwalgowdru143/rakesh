import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
} from "@mui/material";
import {
  Chat,
  Notifications,
  Search,
  MoreVert,
  ArrowForward,
  Download,
  Dashboard,
  BarChart,
  Favorite,
  Person,
  Description,
} from "@mui/icons-material";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1E1E1E",
      paper: "#2A2A2A",
    },
    primary: {
      main: "#BFFF00",
    },
    secondary: {
      main: "#FF9800",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#2A2A2A",
          borderRadius: 16,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        },
      },
    },
  },
});

// Mock data for the charts
const invoiceData = [
  { date: "04 Jul", quotation: 5, approval: 20 },
  { date: "05 Jul", quotation: 25, approval: 35 },
  { date: "06 Jul", quotation: 15, approval: 20 },
  { date: "07 Jul", quotation: 20, approval: 25 },
  { date: "08 Jul", quotation: 15, approval: 20 },
  { date: "09 Jul", quotation: 10, approval: 15 },
  { date: "10 Jul", quotation: 5, approval: 10 },
];

const invoiceBreakdownData = [
  { name: "Pending", value: 175, color: "#64B5F6" },
  { name: "Overdue", value: 254, color: "#81C784" },
  { name: "Essentials", value: 884, color: "#FFB74D" },
];

// Mock data for the table
const tableData = [
  {
    id: "KYRFQ0001",
    vendor: "Bell Gardens",
    contact: "+91 700 838 1259",
    date: "03/03/2023",
    status: "Pending",
  },
  {
    id: "KYRFQ0001",
    vendor: "Bell Gardens",
    contact: "+91 700 838 1259",
    date: "03/03/2023",
    status: "Approved",
  },
];

const SidebarIcon = ({ icon: Icon }) => (
  <IconButton sx={{ color: "grey.500", "&:hover": { color: "primary.main" } }}>
    <Icon />
  </IconButton>
);

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="w-full flex max-h-screen bg-[#1c1b1b]">
        {/* Sidebar */}
        <Box
          sx={{
            width: 80,
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" sx={{ mb: 4, color: "white" }}>
            Kraya.
          </Typography>
          <div className="flex flex-col gap-9 p-3">
            <div className="flex flex-col gap-9 bg-[#342f2f] rounded-md p-3">
              <SidebarIcon icon={Dashboard} />
              <SidebarIcon icon={BarChart} />
              <SidebarIcon icon={Favorite} />
              <SidebarIcon icon={Person} />
              <SidebarIcon icon={Description} />
            </div>
            <div className="p-3">
              <Avatar src="/placeholder.svg" sx={{ width: 40, height: 40 }} />
            </div>
          </div>
        </Box>

        <div className="w-full">
          {/* Nav Bar */}
          <div>
            <AppBar
              position="static"
              color="transparent"
              elevation={0}
              sx={{ mb: 3 }}
            >
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="flex gap-8 p-3 bg-[#342f2f]">
                <IconButton sx={{ color: "grey.500" }}>
                  <Chat />
                </IconButton>
                <IconButton sx={{ color: "grey.500" }}>
                  <Notifications />
                </IconButton>
                <IconButton sx={{ color: "grey.500" }}>
                  <Search />
                </IconButton>
                </div>
              </Box>
            </AppBar>
          </div>

          <div className="w-full flex max-md:flex-col">
            <div className="w-3/4 gap-4 max-md:w-full">
              <div className="w-full flex max-md:flex-col ">
                {/* Bar Chart */}
                <div className="w-1/2 p-4 h-[90%] max-md:w-full">
                  <Card sx={{ height: "100%" }}>
                    <div className="pb-0 p-2">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 2,
                        }}
                      >
                        <Typography variant="h6">Invoices</Typography>
                        <IconButton size="small">
                          <MoreVert />
                        </IconButton>
                      </Box>
                      <ResponsiveContainer width="100%" height={215}>
                        <RechartsBarChart data={invoiceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Bar dataKey="quotation" fill="#FF9800" />
                          <Bar dataKey="approval" fill="#4CAF50" />
                        </RechartsBarChart>
                      </ResponsiveContainer>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <IconButton
                          sx={{
                            bgcolor: "primary.main",
                            color: "background.paper",
                            border: "14px solid #1c1b1b",
                            right: "-13px",
                            bottom: "-13px",
                            rotate: "-45deg",
                          }}
                        >
                          <ArrowForward />
                        </IconButton>
                      </Box>
                    </div>
                  </Card>
                </div>

                {/* loding box */}
                <div className="w-1/2 p-4 h-[90%] max-md:w-full">
                  <Card sx={{ height: "100%" }}>
                    <div className="pb-0 p-2">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 2,
                        }}
                      >
                        <Typography variant="h6">
                          Top selling product
                        </Typography>
                        <IconButton size="small">
                          <MoreVert />
                        </IconButton>
                      </Box>
                      <Box
                        sx={{
                          height: 215,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          Chart coming soon
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <IconButton
                          sx={{
                            bgcolor: "primary.main",
                            color: "background.paper",
                            border: "14px solid #1c1b1b",
                            right: "-13px",
                            bottom: "-13px",
                            rotate: "-45deg",
                          }}
                        >
                          <ArrowForward />
                        </IconButton>
                      </Box>
                    </div>
                  </Card>
                </div>
              </div>

              {/* quick Status table */}
              <div className="w-full p-4">
                <Card>
                  <div className="pb-0 p-2">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Typography variant="h6">Status</Typography>
                      <IconButton size="small">
                        <Download />
                      </IconButton>
                    </Box>
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>RFQ ID</TableCell>
                            <TableCell>Vendor</TableCell>
                            <TableCell>Vendor Contact</TableCell>
                            <TableCell>Apply Date</TableCell>
                            <TableCell>Status</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {tableData.map((row) => (
                            <TableRow key={row.id}>
                              <TableCell>{row.id}</TableCell>
                              <TableCell>{row.vendor}</TableCell>
                              <TableCell>{row.contact}</TableCell>
                              <TableCell>{row.date}</TableCell>
                              <TableCell>
                                <Box
                                  sx={{
                                    bgcolor:
                                      row.status === "Approved"
                                        ? "success.main"
                                        : "warning.main",
                                    color: "background.paper",
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: 1,
                                    display: "inline-block",
                                    fontSize: "0.75rem",
                                  }}
                                >
                                  {row.status}
                                </Box>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 2,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        1 2 ... 5 6
                      </Typography>
                    </Box>
                  </div>
                </Card>
              </div>
            </div>
            <div className="w-1/4 gap-4 flex flex-col justify-between max-md:w-full">
              <div className="w-full grid grid-cols-2">
                <div className="p-4">
                  <Card sx={{ bgcolor: "#3D3D3D", height: "115px" }}>
                    <div className=" pb-0 p-2">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "2px",
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          className="font-[0.8rem]"
                        >
                          Spend
                        </Typography>
                        <IconButton size="small" sx={{ bgcolor: "#2A2A2A" }}>
                          <ArrowForward fontSize="small" />
                        </IconButton>
                      </Box>
                      <Typography variant="h4" sx={{ mt: 2, fontSize: "18px" }}>
                        $123.456
                      </Typography>
                    </div>
                  </Card>
                </div>
                <div className="p-4">
                  <Card sx={{ bgcolor: "#3D3D3D", height: "115px" }}>
                    <div className=" pb-0 p-2">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "2px",
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          className="font-[0.8rem]"
                        >
                          Supplier
                        </Typography>
                        <IconButton size="small" sx={{ bgcolor: "#2A2A2A" }}>
                          <ArrowForward fontSize="small" />
                        </IconButton>
                      </Box>
                      <Typography variant="h4" sx={{ mt: 2, fontSize: "18px" }}>
                        12
                      </Typography>
                    </div>
                  </Card>
                </div>
                <div className="p-4">
                  <Card sx={{ bgcolor: "#3D3D3D", height: "115px" }}>
                    <div className=" pb-0 p-2">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "2px",
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          className="font-[0.8rem]"
                        >
                          Invoices
                        </Typography>
                        <IconButton size="small" sx={{ bgcolor: "#2A2A2A" }}>
                          <ArrowForward fontSize="small" />
                        </IconButton>
                      </Box>
                      <Typography variant="h4" sx={{ mt: 2, fontSize: "18px" }}>
                        12
                      </Typography>
                    </div>
                  </Card>
                </div>
                <div className="p-4">
                  <Card sx={{ bgcolor: "#3D3D3D", height: "115px" }}>
                    <div className=" pb-0 p-2">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "2px",
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          className="font-[0.8rem]"
                        >
                          PO processed
                        </Typography>
                        <IconButton size="small" sx={{ bgcolor: "#2A2A2A" }}>
                          <ArrowForward fontSize="small" />
                        </IconButton>
                      </Box>
                      <Typography variant="h4" sx={{ mt: 2, fontSize: "18px" }}>
                        12
                      </Typography>
                    </div>
                  </Card>
                </div>
              </div>
              <div className="w-full p-3">
                <Card>
                  <div className="pb-0 p-2">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Typography variant="h6">Invoices</Typography>
                      <IconButton size="small">
                        <MoreVert />
                      </IconButton>
                    </Box>
                    <Box sx={{ height: 170 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={invoiceBreakdownData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {invoiceBreakdownData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      {invoiceBreakdownData.map((item) => (
                        <Box
                          key={item.name}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 1,
                          }}
                        >
                          <Typography variant="body2" color="text.secondary">
                            {item.name}
                          </Typography>
                          <Typography variant="body2">${item.value}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
      </div>
    </ThemeProvider>
  );
}
