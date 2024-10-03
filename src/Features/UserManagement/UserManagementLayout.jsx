import UserManageHeader from './Components/UserManageHeader';
import UserManageStats from './Components/UserManageStats';
import UserManageBody from './Components/UserManageBody';

const users = [
  {
    id: 'FB123',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@gmail.com',
    role: 'manager',
    phone: '9876543210',
  },
  {
    id: 'FB432',
    name: 'Riya Patel',
    email: 'riya.patel@gmail.com',
    role: 'employee',
    phone: '8765432109',
  },
  {
    id: 'FB567',
    name: 'Vihaan Reddy',
    email: 'vihaan.reddy@gmail.com',
    role: 'employee',
    phone: '7654321098',
  },
  {
    id: 'FB890',
    name: 'Ishita Mehta',
    email: 'ishita.mehta@gmail.com',
    role: 'manager',
    phone: '6543210987',
  },
  {
    id: 'FB234',
    name: 'Kabir Singh',
    email: 'kabir.singh@gmail.com',
    role: 'employee',
    phone: '5432109876',
  },
  {
    id: 'FB678',
    name: 'Ananya Iyer',
    email: 'ananya.iyer@gmail.com',
    role: 'employee',
    phone: '4321098765',
  },
  {
    id: 'FB345',
    name: 'Aditya Rao',
    email: 'aditya.rao@gmail.com',
    role: 'manager',
    phone: '3210987654',
  },
  {
    id: 'FB789',
    name: 'Tanvi Kapoor',
    email: 'tanvi.kapoor@gmail.com',
    role: 'employee',
    phone: '2109876543',
  },
  {
    id: 'FB456',
    name: 'Rohan Gupta',
    email: 'rohan.gupta@gmail.com',
    role: 'employee',
    phone: '1098765432',
  },
  {
    id: 'FB901',
    name: 'Mira Bansal',
    email: 'mira.bansal@gmail.com',
    role: 'manager',
    phone: '0987654321',
  },
  {
    id: 'FB567',
    name: 'Ayaan Joshi',
    email: 'ayaan.joshi@gmail.com',
    role: 'employee',
    phone: '9876501234',
  },
  {
    id: 'FB345',
    name: 'Sneha Verma',
    email: 'sneha.verma@gmail.com',
    role: 'employee',
    phone: '8765401235',
  },
  {
    id: 'FB876',
    name: 'Aryan Desai',
    email: 'aryan.desai@gmail.com',
    role: 'manager',
    phone: '7654301236',
  },
  {
    id: 'FB654',
    name: 'Neha Nair',
    email: 'neha.nair@gmail.com',
    role: 'employee',
    phone: '6543201237',
  },
  {
    id: 'FB543',
    name: 'Raj Malhotra',
    email: 'raj.malhotra@gmail.com',
    role: 'employee',
    phone: '5432101238',
  },
];
const managers = users.filter((user) => user.role === 'manager');
const employees = users.filter((user) => user.role === 'employee');

export default function UserManagementLayout() {
  return (
    <div>
      <UserManageHeader />
      <UserManageStats
        managers={managers.length}
        employees={employees.length}
      />
      <UserManageBody users={users} />
    </div>
  );
}
