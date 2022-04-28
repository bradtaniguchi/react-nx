import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { createRoom, Room } from '@react-nx/api-interfaces';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GroupIcon from '@mui/icons-material/Group';

export const Rooms = () => {
  const [roomsLoading, setRoomsLoading] = useState<boolean>();
  const [rooms, setRooms] = useState<Room[]>([]);

  // TODO: change to fetch
  useEffect(() => {
    console.log('getting rooms!');
    let mounted = false;
    if (!mounted) {
      setRooms([
        createRoom({ _id: 'room1', name: 'room 1' }),
        createRoom({ _id: 'room2', name: 'room 2' }),
      ]);
      setRoomsLoading(false);
      mounted = true;
    }
  }, []);

  if (roomsLoading) {
    return <div>loading...</div>;
  }

  if (!rooms) {
    return <div>no rooms</div>;
  }

  return (
    <List>
      {rooms.map(({ _id, name }) => (
        <ListItem
          key={_id.toString()}
          component={Link}
          to={`/room/${_id.toString()}`}
        >
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );
};
