package com.solo.webshop.Exeprions;

import java.text.MessageFormat;

public class ItemNotFoundExeption extends RuntimeException{

    public ItemNotFoundExeption(int id){
        super(MessageFormat.format("Could not find item with id: {0}", id));
    }

}
