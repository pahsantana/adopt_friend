
import app  from './app';

const port = process.env.PORT || 8080
app.listen(port, _ => console.log(`Rodando na porta :${port}`));