export type Ticket = {
   id: number;
   time: string;
   passengerName: string;
   passengerSSN: number;
   from: string;
   to: string;
   price: number;
};

export type TicketCreateDto = Omit<Ticket, "id">;
