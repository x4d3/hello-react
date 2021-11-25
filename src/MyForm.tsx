import { Button, Paper, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { FormInputText } from "./formComponents/FormInputText";
import { FormInputMultiCheckbox } from "./formComponents/FormInputMultiCheckbox";
import { FormInputDate } from "./formComponents/FormInputDate";
import { FormInputSlider } from "./formComponents/FormInputSlider";
import { FormInputRadio } from "./formComponents/FormInputRadio";
import { FormInputDropdown } from "./formComponents/FormInputDropdown";

interface IFormInput {
  textValue: string;
  radioValue: string;
  checkboxValue: string[];
  dateValue: Date;
  dropdownValue: string;
  sliderValue: number;
}

const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 0,
};

export default function MyForm() {
  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue } = methods;
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
      <Paper
          style={{
              display: "grid",
              gridRowGap: "20px",
              padding: "20px",
              margin: "10px 300px",
          }}
      >
          <Typography variant="h6"> Form Demo</Typography>

          <FormInputText name="textValue" control={control} label="Text Input" />
          <FormInputRadio
              name={"radioValue"}
              control={control}
              label={"Radio Input"}
          />
          <FormInputDropdown
              name="dropdownValue"
              control={control}
              label="Dropdown Input"
          />
          <FormInputDate name="dateValue" control={control} label="Date Input" />
          <FormInputMultiCheckbox
              control={control}
              setValue={setValue}
              name={"checkboxValue"}
              label={"Checkbox Input"}
          />
          <FormInputSlider
              name={"sliderValue"}
              control={control}
              setValue={setValue}
              label={"Slider Input"}
          />

          <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
              {" "}
              Submit{" "}
          </Button>
          <Button onClick={() => reset()} variant={"outlined"}>
              {" "}
              Reset{" "}
          </Button>
      </Paper>
  );
}
