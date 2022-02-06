import React from "react";
import Input from "../Input";
import SubmitButton from "../Button";
import GuestSection from "../GuestSection";
import { useFormContext } from "../../hooks/useFormContext";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box, CircularProgress } from "@mui/material";
// import EmailInput from "../EmailInput";

export const Form = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const { formData, loading, hasResponded, partyUuid } = useFormContext();
  const anyoneAttending =
    formData.filter((attendance) => attendance.attending).length > 0
      ? true
      : false;

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <div id="rsvp" className="flex-col flex items-center font-sans">
      {partyUuid.length === 36 && (<h2 className="text-5xl pb-10 pt-10 self-center text-2xl ">RSVP</h2>)}
      {partyUuid.length !== 36 && (
        <h3 className="text-2xl pb-10 pt-10 self-center text-2xl ">
          You need to use the link sent in your email to RSVP
        </h3>
      )}
      {hasResponded && (
        <p className="text-lg pb-10 pt-10 self-center text-2xl text-red-600">
          You have already responded, but feel free to update your RSVP below
        </p>
      )}
      {formData[0] && (
        <form className="font-sans max-w-lg border-gray-300 shadow-xs m-4 p-3 mb-10 box-content border-2 rounded-xl flex-col flex items-center">
          {formData.map((guest, i) => {
            return <GuestSection guest={guest} key={i} />;
          })}
          {/* <EmailInput /> */}
          {anyoneAttending && (
            <div className="w-11/12 pb-4">
              <Input
                labelText="Song requests"
                inputName={"songrequest"}
                guestUuid={"Apply_to_all"}
                value={formData[0].songrequest}
              />
            </div>
          )}

          <SubmitButton setOpen={setOpen} />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {loading && <CircularProgress />}
              {!loading && (
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Thanks for your response!
                </Typography>
              )}
            </Box>
          </Modal>
        </form>
      )}
      <p className="pb-4 font-sans">
        This site was built by Tom. Please direct all errors and complaints to
        Frankie.
      </p>
    </div>
  );
};
