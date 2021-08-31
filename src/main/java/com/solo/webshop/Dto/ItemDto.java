/*
package com.solo.webshop.Dto;

import com.solo.webshop.Entities.OrderLine;
import lombok.Data;

import java.util.Objects;



public class ItemDto {
    private int id;
    private String serialNumber;
    private PlainCartDto plainCartDto;

    public static ItemDto from(OrderLine orderLine){
        ItemDto itemDto = new ItemDto();
        itemDto.setId(orderLine.getId());
        itemDto.setSerialNumber(orderLine.getSerialNumber());
        if(Objects.nonNull(orderLine.getCart())){
            itemDto.setPlainCartDto(PlainCartDto.from(orderLine.getCart()));
        }
        return itemDto;
    }
}
*/
