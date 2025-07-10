const guests = new Map([
  // Invitados con mensajes y apodos especiales
  ['Karol', { nickname: 'Amor', message: "¡Ey Amor, eres lo más importante para mí y sabes que anhelaba este día a tu lado! Gracias por todo lo que estás haciendo, te amo." }],
  ['Blanca', { nickname: 'Mamita Bella', message: "¡Ey Mamita Bella, te amo!" }],
  
  // Invitadas
  ['Liz', { nickname: 'Manita', gender: 'f' }],
  ['Gabriela', { nickname: 'Mi Gaby', gender: 'f' }],
  ['Esmeralda', { nickname: 'Mi perris Hermosa, te quiero mucho', gender: 'f' }],
  ['Loriet', { nickname: 'Loriet', gender: 'f' }],
  ['Luisa', { nickname: 'Lui', gender: 'f' }],
  ['Lina', { nickname: 'Parcerita', gender: 'f' }],
  ['Zully', { nickname: 'Sobrina', gender: 'f', hasPlusOne: true }],
  ['Laura', { nickname: 'Sobrina', gender: 'f', hasPlusOne: true }],
  ['Danelly', { nickname: 'Danelly', gender: 'f' }],
  
  // Invitados
  ['Santiago', { nickname: 'Hijo', gender: 'm' }],
  ['Eduardo', { nickname: 'Perro', gender: 'm' }],
  ['Gabriel', { nickname: 'Gabriel', gender: 'm' }],
  ['Aderson', { nickname: 'Manito', gender: 'm' }],
  ['Harold', { nickname: 'Parcero', gender: 'm' }],
  ['Juandi', { nickname: 'Parcero', gender: 'm' }],
  ['Cesar', { nickname: 'Parce', gender: 'm' }],
  ['Wilson', { nickname: 'Parce', gender: 'm' }],
  ['Ganmel', { nickname: 'Paspi', gender: 'm' }],
]);

export function getConfirmationMessage(name) {
  const guest = guests.get(name);

  if (!guest) {
    return `¡Hola, ${name}! Tu nombre se ha añadido. Te contactaré pronto para confirmar los detalles. vai!`;
  }

  if (guest.message) {
    return guest.message;
  }

  if (guest.gender === 'f') {
    let message = `¡Ey ${guest.nickname}, qué bonito que me confirmes! Eres súper importante para mí y me da una felicidad tenerte en este día tan especial. Será mi última celebración en la vida jajajaja, así que agradezco un montón que me acompañes.`;
    if (guest.hasPlusOne) {
      message += " Además, se ha confirmado tu cupo y el de tu acompañante (2 personas).";
    }
    return message;
  }

  if (guest.gender === 'm') {
    return `¡Parce ${guest.nickname}, qué chimba que vengas! Me gusta que me acompañes este día. Nos vemos pues, que esto va a estar una chimba!.`;
  }

  // Fallback por si acaso
  return `¡Gracias por confirmar, ${name}! Tu presencia es el mejor regalo. ¡Nos vemos en la fiesta para celebrar mis 40!`;
}
