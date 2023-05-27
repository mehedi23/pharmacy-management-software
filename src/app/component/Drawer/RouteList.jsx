import React, {useState} from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LensBlurIcon from '@mui/icons-material/LensBlur';

export default function NestedList({item}) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    {item?.icon}
                </ListItemIcon>
                <ListItemText primary={item?.name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            
            <Collapse in={open} timeout="auto" unmountOnExit>
                {
                    item.children?.map((_item, _index) => (
                        <List component="div" disablePadding key={_index}>
                            <ListItemButton sx={{ pl: 6}}>
                                <ListItemIcon sx={{minWidth : 30 }}>
                                    <LensBlurIcon fontSize='8px'/>
                                </ListItemIcon>
                                <ListItemText primary={_item?.name} />
                            </ListItemButton>
                        </List>
                    ))
                }
            </Collapse>
        </>
    );
}