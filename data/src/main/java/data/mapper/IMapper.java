package data.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import data.model.dto.AbbatoireDTO;
import data.model.dto.CustomerDTO;

public interface IMapper {
	
	AbbatoireDTO getAbbatoireBySiret(@Param("schema") String schema, @Param("siret")Long Siret);
	
	
	List<CustomerDTO> getCustomers();

}
