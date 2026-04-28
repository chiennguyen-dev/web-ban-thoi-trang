import { Grid2 } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'

const AdminDashboard = () => {
  return (
    <div className='p-10'>
      <Grid2 container spacing={2}>
    <Grid2 item size={{ xs: 12, lg: 4 }}>

        <Achivement/>

    </Grid2>
    <Grid2 item size={{ xs: 12, lg: 8 }}>

        <MonthlyOverview/>

    </Grid2>

</Grid2>
    </div>
  )
}

export default AdminDashboard
