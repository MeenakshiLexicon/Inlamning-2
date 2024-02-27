import Button from '@mui/material/Button';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = ({ name, score }) => {
    const navigate = useNavigate();

  
useEffect(() => {
    console.log("Result useEffect triggered");
    if (!name) {
        navigate("/result");
    }
}, [name, navigate]);

    
    return (
        <div className="result">
            <span className="title">Final Score: {score}</span>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ alignSelf: "center", marginTop: 20 }}
                onClick={() => navigate("/")}
              
            >
                Go to homepage
            </Button>
        </div>
    );
};

export default Result;
