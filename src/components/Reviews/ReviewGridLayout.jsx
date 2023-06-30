import React from "react";
import { Grid, Typography, Stack, IconButton } from "@mui/material";
import ReviewGrid from "./ReviewGrid";
import styled from "@emotion/styled";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// Styled component for the main grid container
const StyledGrid = styled(Grid)({
  height: "512px",
  width: "1440px",
  overflow: "hidden",
});

// Styled component for the inner grid container of review section
const StyledReviewGridInner = styled(Grid)({
  height: "378px",
  left: "175px",
  position: "relative",
  top: "57px",
  width: "1459px",
});

// Styled component for the header section of the review
const StyledReviewGridHeader = styled(Grid)({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  left: "0",
  position: "relative",
  top: "0",
  width: "fit-content",
});

// Styled component for the first line of the header in the review section
const StyledReviewGridHeader1 = styled(Typography)({
  color: "#000000",
  fontFamily: "Inter, Helvetica",
  fontSize: "40px",
  fontWeight: "700",
  letterSpacing: "0",
  lineHeight: "normal",
  marginTop: "-1px",
  position: "relative",
  whiteSpace: "nowrap",
  width: "fit-content",
});

// Styled component for the second line of the header in the review section
const StyledReviewGridHeader2 = styled(Typography)({
  color: "#000000",
  fontFamily: "Poppins, Helvetica",
  fontSize: "12px",
  fontWeight: "400",
  letterSpacing: "0",
  lineHeight: "normal",
  position: "relative",
  width: "399px",
});

// Styled component for the reviews section
const StyledReviews = styled(Grid)({
  height: "238px",
  left: "0",
  position: "absolute",
  top: "140px",
  width: "1459px",
});

// Styled component for the next review button/image
const StyledNextReview = styled("img")({
  height: "130px",
  left: "915px",
  position: "absolute",
  top: "68px",
  width: "130px",
});

const ReviewGridLayout = () => {
  return (
    <StyledGrid className="review-grid">
      <StyledReviewGridInner className="review-grid-inner">
        <Grid></Grid>
        <StyledReviewGridHeader className="review-grid-header">
          <StyledReviewGridHeader1 className="review-grid-header1">
            Review from customers
          </StyledReviewGridHeader1>
          <StyledReviewGridHeader2 className="review-grid-header2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
          </StyledReviewGridHeader2>
        </StyledReviewGridHeader>

        <StyledReviews className="reviews">
          <Stack direction="row" spacing={3}>
            <ReviewGrid frame="https://ik.imagekit.io/sathish2267/propaccel/frame-20-3.svg?updatedAt=1688016921882" />
            <ReviewGrid frame="https://ik.imagekit.io/sathish2267/propaccel/frame-20-3.svg?updatedAt=1688016921882" />
            <ReviewGrid frame="https://ik.imagekit.io/sathish2267/propaccel/frame-20-3.svg?updatedAt=1688016921882" />
            <StyledNextReview
              className="next-review"
              alt="Frame"
              style={{ cursor: "pointer" }}
              src="https://ik.imagekit.io/sathish2267/propaccel/frame-85.svg?updatedAt=1688040668417"
            />
          </Stack>
          <Stack justifyContent="center" alignItems="center" m={3}>
            <Stack
              direction={"row"}
              justifyContent={"flex-end"}
              color={"white"}
              alignItems={"center"}
              height={"15px"}
              width="50px"
            >
              {/* Creating five FiberManualRecordIcons for the pagination */}
              <IconButton>
                <FiberManualRecordIcon sx={{ color: "#7A3199" }} />
              </IconButton>

              <IconButton>
                <FiberManualRecordIcon color="#7A3199" />
              </IconButton>

              <IconButton>
                <FiberManualRecordIcon color="#7A3199" />
              </IconButton>

              <IconButton>
                <FiberManualRecordIcon color="#7A3199" />
              </IconButton>

              <IconButton>
                <FiberManualRecordIcon color="#7A3199" />
              </IconButton>
            </Stack>
          </Stack>
        </StyledReviews>
      </StyledReviewGridInner>
    </StyledGrid>
  );
};

export default ReviewGridLayout;
