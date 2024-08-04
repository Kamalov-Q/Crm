export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "username",
    headerName: "User",
    width: 200,
  },
  {
    field: "email",
    headerName: "User Email",
    width: 250
  },
  {
    field: "age",
    headerName: "User Age",
    width: 250
  },
  {
    field: "status",
    headerName: "User Status",
    width: 200,
    renderCell: (params) => {
      return (
        <span className={`cellWithStatus ${params?.row?.status}`}>
          {params?.row?.status}
        </span>
      )
    }
  }
];

export const Rows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgbb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgbb&dpr=2&w=500",
    status: "passive",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgbb&dpr=2&w=500",
    status: "pending",
    email: "3snow@gmail.com",
    age: 29,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgbb&dpr=2&w=500",
    status: "active",
    email: "4snow@gmail.com",
    age: 17,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgbb&dpr=2&w=500",
    status: "passive",
    email: "5snow@gmail.com",
    age: 23,
  },
  {
    id: 6,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgbb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgbb&dpr=2&w=500",
    status: "passive",
    email: "7snow@gmail.com",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgbb&dpr=2&w=500",
    status: "active",
    email: "8snow@gmail.com",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgbb&dpr=2&w=500",
    status: "pending",
    email: "9snow@gmail.com",
    age: 35,
  },
];
