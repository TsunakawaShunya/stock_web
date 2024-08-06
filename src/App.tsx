import { ColumnBase, FormControlGroup, FormControl, TextField, Button } from '@freee_jp/vibes';

function App() {
  return (
    <>
      <ColumnBase>
        <FormControlGroup>
          <FormControl label="日付" fieldId="dateField" mb={1} mr={1}>
            <TextField id="dateField" name="dateField" />
          </FormControl>
          <FormControl label="備考" fieldId="noteField" mb={1} mr={1}>
            <TextField id="noteField" name="noteField" />
          </FormControl>
          ...
        </FormControlGroup>
        <Button onClick={() => doSubmit()}>送信</Button>
      </ColumnBase>
    </>
  )
}

export default App
