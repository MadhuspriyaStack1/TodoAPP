// import React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Slide from "@mui/material/Slide";
// import { Grid, TextField } from "@mui/material";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const UpdateForm = (props) => {
//   return (
//     <div>
//       <Dialog
//         open={props.openPopup}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={props.handleClose}
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogTitle sx={{ textAlign: "center", padding: "30px" }}>
//           {"Update the Task?"}
//         </DialogTitle>
//         <DialogContent sx={{ padding: "20px" }}>
//           <form onSubmit={props.handleUpdateSub}>
//             <Grid container justifyContent="center">
//               <Grid item xs={8}>
//                 <TextField
//                   id="imputField"
//                   label="Enter to add the task"
//                   variant="outlined"
//                   fullWidth={true}
//                   size="small"
//                   sx={{ margin: "10px" }}
//                   value={props.inputData}
//                   onChange={props.handleUpadte}
//                   error={props.error ? true : false}
//                   helperText={props.error}
//                 />
//               </Grid>
//             </Grid>
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={props.handleClose}>Disagree</Button>
//           <Button onClick={props.handleClose}>Agree</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default UpdateForm;

// <UpdateForm
//   openPopup={open}
//   handleClose={handleClose}
//   value={updateTask}
//   onChange={handleUpadte(item)}
//   error={error ? true : false}
//   helperText={error}
// />;
