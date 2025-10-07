import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

interface MenuOption {
  label: React.ReactNode;
  icon?: React.ReactNode;
  avatar?: boolean;
  onClick: () => void;
  dividerAfter?: boolean;
}

interface CommonMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  options: MenuOption[];
}

const CommonMenu: React.FC<CommonMenuProps> = ({
  anchorEl,
  open,
  onClose,
  options,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      onClick={onClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}

      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 10,
            },
          },
        },
      }}
    >
      {options.map(({ label, avatar, onClick, dividerAfter }, index) => (
        <React.Fragment key={index}>
          <MenuItem 
                className="flex gap-2 items-center" 
                 sx={{ px: 4, py: 1 }}
                onClick={onClick}>
            {avatar && <Avatar />}
            {label}
          </MenuItem>
          {dividerAfter && <Divider />}
        </React.Fragment>
      ))}
    </Menu>
  );
};

export default CommonMenu;

