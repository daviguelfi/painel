export const convertGender = (gender: string): string => {
  if (gender === "MALE") {
    return "Masculino";
  }
  return "Feminino";
};


// IE_LADO (A) Bilateral ambos
// IE_LADO (D) Direito
// IE_LADO (E) Esquerdo
// IE_LADO (I) Inferior
// IE_LADO (N) Não se aplica
// IE_LADO (S) Superior