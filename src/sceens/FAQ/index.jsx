import {Box, Typography, useTheme} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import {tokens} from "../../theme";

const questionsList = [
    {
        question: 'Lorem ipsum dolor sit amet.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad debitis, dignissimos dolorum eaque earum eius est fuga in ipsam labore maiores mollitia odit quisquam rem reprehenderit sed sequi veritatis!',
    },
    {
        question: 'Lorem ipsum dolor sit.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad debitis, dignissimos dolorum eaque earum eius est fuga in ipsam labore maiores mollitia odit quisquam rem reprehenderit sed sequi veritatis!',
    },
    {
        question: 'Lorem ipsum dolor.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad debitis, dignissimos dolorum eaque earum eius est fuga in ipsam labore maiores mollitia odit quisquam rem reprehenderit sed sequi veritatis!',
    },
    {
        question: 'Lorem ipsum.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad debitis, dignissimos dolorum eaque earum eius est fuga in ipsam labore maiores mollitia odit quisquam rem reprehenderit sed sequi veritatis!',
    },
    {
        question: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad debitis, dignissimos dolorum eaque earum eius est fuga in ipsam labore maiores mollitia odit quisquam rem reprehenderit sed sequi veritatis!',
    }
]

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            {questionsList.map((question, index) => (
                <Accordion
                    defaultExpanded={!index}
                    key={question.question}
                    sx={{
                        marginBottom: '10px'
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography
                            variant="h5"
                            color={colors.greenAccent[500]}
                        >
                            {index + 1}.&nbsp;{question.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {question.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    )
}

export default FAQ;