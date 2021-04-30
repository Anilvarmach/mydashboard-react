import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard/dashboard';
import Card from './dashboard/card';

function App() {

  const cardData = [
    {
      name: ' Earnings (Monthly',
      total: '$40000',
      icon: ' fa-calendar',
      border: 'border-left-primary',
      text: 'text-primary'
    },
    {
      name: ' Earnings (Annual)',
      total: '$215,000',
      icon: '  fa-dollar-sign',
      border: 'border-left-success',
      text: 'text-success'
    },
    {
      name: 'Task',
      total: '50%',
      icon: ' fa-clipboard-list',
      border: 'border-left-info',
      text: 'text-info'
    },
    {
      name: 'Pending Requests',
      total: '80',
      icon: ' fa-comments',
      border: 'border-left-warning',
      text:'text-warning'
  }]
  return <>
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
          <div class="container-fluid">
            <Dashboard></Dashboard>
            <div class="row">
              {
                cardData.map((data) => {
                 return  <Card place= {data}></Card>
                })
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default App;
