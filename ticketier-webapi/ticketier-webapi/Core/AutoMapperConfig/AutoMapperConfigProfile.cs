﻿using AutoMapper;
using ticketier_webapi.Core.DTO;
using ticketier_webapi.Core.Entities;

namespace ticketier_webapi.Core.AutoMapperConfig
{
    public class AutoMapperConfigProfile : Profile
    {
        public AutoMapperConfigProfile()
        {
            // Tickets
            CreateMap<CreateTicketDto, Ticket>();
            CreateMap<Ticket, GetTicketDto>();
            CreateMap<UpdateTicketDto, Ticket>();
        }
    }
}
