import { AccountCircle, TrendingUp } from '@mui/icons-material'
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'
import { Avatar, Box, Card, CardContent, CardHeader, Grid2, IconButton, Typography } from '@mui/material';

const salesData=[
    {
        stats:'245K',
        tittle:"Sales",
        color:"#E5D68A",
        icon:<TrendingUp sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:'12.5K',
        tittle:"Customers",
        color:"#22CB5C",
        icon:<AccountCircle sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats: '1.54K',
        tittle: "Products",
        color: "#DE4839",
        icon: <SettingsCellIcon sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats: '88K',
        tittle: "Revenue",
        color: "#12B0E8",
        icon: <AttachMoneyIcon sx={{fontSize:"1.75rem"}}/>
    }
]

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid2 item size={{ xs: 12, lg: 3 }} key={index}>
      <Box sx={{
        display: "flex", alignItems: 'center'
      }}>
        <Avatar variant='rounded' sx={{
            mr:3,
            width:44,
            height:44,
            boxShadow:3,
            color:"common.white",
            backgroundColor:`${item.color}`
        }}>
{item.icon}            
        </Avatar>

        <Box sx={{display:'flex', flexDirection:'column'}}>
            <Typography variant='caption'>{item.tittle}</Typography>
            <Typography variant='h6'>{item.stats}</Typography>
        </Box>

      </Box>
    </Grid2>
  ))
}

const MonthlyOverview = () => {
  return (
    <Card sx={{bgcolor:"#242B2E",color:"white", height: '100%'}}>
        <CardHeader title="Monthly Overview"
        action={
            <IconButton size='small'>
                <MoreVertIcon/>
            </IconButton>
        }
        subheader={
            <Typography variant='body2'>
                <Box component="span" sx={{fontWeight:600}}>
                    Total 48.5% growth
                </Box>
                this month
            </Typography>
        }
        titleTypographyProps={{
            sx:{
                mb: 2.5,
                lineHeight: '2rem !important',
                letterSpacing: '.15px !important'
            }
        }}
        />
        <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
            <Grid2 container spacing={[5,0]}>
                {renderStats()}
            </Grid2>
        </CardContent>
    </Card>
  )
}

export default MonthlyOverview
