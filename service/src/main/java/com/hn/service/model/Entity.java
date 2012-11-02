package com.hn.service.model;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;

import com.hn.service.model.def.IEntity;

public class Entity implements IEntity {
	
	private String name;
	private String id;
	private String description;
	
	@XmlElement(name = "name")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}


	@XmlElement(name= "id")
	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	@XmlElement(name = "desc")
	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}
	
	@XmlElement(name="projects")
	public List<Project> projects = new ArrayList<Project>();


}
