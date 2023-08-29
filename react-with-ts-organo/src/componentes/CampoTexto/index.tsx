import "./CampoTexto.css";

interface FieldTextProps {
  valor: string;
  obrigatorio?: boolean;
  label: string;
  aoAlterado: (valor: string) => void;
  placeholder: string;
}

const CampoTexto = ({
  valor,
  obrigatorio = false,
  label,
  aoAlterado,
  placeholder,
}: FieldTextProps) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
