import React from 'react';
import CSS from 'csstype';

export interface popUp {
  title: string;
  header: string;
  icon: any;
  component: React.ReactNode;
  style: {
    height?: string,
    margin?: string,
    width?: string,
  };
}
export interface ObjAnyType {
  [column: string]: any;
}

export interface ObjStringType {
  [column: string]: string;
}

export interface ArrayAny {
  [item: string]: any;

}

export interface tableType {
  titles: string[];
  rows: ObjAnyType[];
}

export interface CheckboxListType {
  [title: string]: ObjStringType
}

export interface inStylesType {
  [styles: string]: CSS.Properties;
}